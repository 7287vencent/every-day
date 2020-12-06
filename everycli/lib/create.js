const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");
const moment = require('moment');
// ? 封装一个 log
const log = content => console.log(chalk.green(content));

const GLOBAL = {
  categories: '',
  tags: ''
}
// ? todo 最好的还是能读取当前目录的结构
module.exports = async () => {
  // ? 先清理 命令界面
  clear();
  // ? 打印欢迎页面
  const data = await figlet("j s c l i");
  log(data);
  // ? 准备 promot
  const presetPrompt = [ // ? 想要做到添加功能，就必须得做到数据持久化
    {
      name: "dir",
      type: "list",
      message: "请选择目录",
      choices: [
        "数据结构与算法/画解剑指offer/BFS",
        '数据结构与算法/动态规划',
        '自定义']
    }, {
      type: 'input',
      message: '请输入自定义目录',
      name: 'custom',
      when: function (ans) {
        return ans.dir === '自定义'
      }
    }
  ];
  const answers = await inquirer.prompt(presetPrompt);
  GLOBAL.categories = answers.custom || answers.dir
  // ? 用户选择的目录
  const dirpath = path.resolve(__dirname, "../../", answers.custom || answers.dir);
  log(`您选择的目录:${dirpath}`);
  // ? 判断 目录是否存在，存在就让用户输入 要创建的目录名称，否则先判断是否需要重新创建
  isExistdir(dirpath) ? inputDirName(dirpath) : notExistDir(dirpath)
};

/**
 * @param {*} dirpath 路径
 * @description  // todo 用户输入 目录 ，然后创建
 */
async function inputDirName (dirpath) {
  const inputPrompt = [
    {
      name: "childDir",
      type: "list",
      message: "请选择标签",
      choices: ["BFS", '自定义']
    },
    {
      type: 'input',
      message: '自定义标签',
      name: 'custom',
      when: function (ans) {
        return ans.childDir === '自定义'
      }
    },
    {
      type: 'input',
      message: '请输入要创建的文件名',
      name: 'inputname',
    },
    {
      type: "confirm",
      message: "是否为标签创建文件夹🤔",
      name: "watch",
      default: true
    }
  ]
  const answers = await inquirer.prompt(inputPrompt)
  console.log("sna", answers)
  // ? 全局标签
  GLOBAL.tags = answers.custom || answers.childDir
  // ? 标签不创建文件夹 ? 标签单独创建文件夹 
  const finalPath = path.join(dirpath, `${answers.watch ? (answers.custom || answers.childDir) : ''}/${answers.inputname || 'default'}`)
  console.log("file", finalPath)
  // todo 自定义标签创建目录
  answers.custom && answers.watch ? createDir(path.resolve(dirpath, `${answers.custom}`)) : null
  if (!isExistdir(finalPath)) {
    // todo 这一步 应该是创建 模板文件
    // const result = await createDir(finalPath) // ? 创建目录成功
    const result = true
    result && createModelFile(finalPath, answers.inputname) // ? 创建模板
    // todo 创建目录成功之后，应该创建模板文件
    !result && log('创建失败了!!!!!!')
  } else {
    log("您输入的文件已存在，请重新输入")
    inputDirName(dirpath)
  }
}
/**
 * 
 * @param {*} finalPath 
 * @param {*} filename 
 * @description // todo 创建 模板文件 
 */
function createModelFile (finalPath, filename) {
  const templatePath = path.resolve(__dirname, '../template') // 模板的位置
  let templateFiles = fs.readdirSync(templatePath)
  // ? 写入的文件名不会带上 hbs
  // ? 遍历 templateFiles 然后创建
  templateFiles.forEach(v => {
    const filePath = `${finalPath}.md` // ? 写入的文件 路径
    const content = fs.readFileSync(`${templatePath}\/${v}`).toString() // ? 读取模板
    const result = handlebars.compile(content)({ // ? 执行模板 并传入的值 编译
      filename: filename,
      date: moment().format('YYYY-MM-DD'),
      categories: GLOBAL.categories,
      tags: GLOBAL.tags
    })
    fs.writeFileSync(filePath, result) // ? 把 编译后的模板 写入 文件
    console.log(chalk.red(`${filePath} 创建成功`));
  })
}

/**
 *
 * @param {*} dirpath 路径
 * @description  // todo 选择的目录不存在，是否重新创建
 */
async function notExistDir (dirpath) {
  const confirmPrompt = [
    {
      type: 'confirm',
      message: '您选择的目录不存在,是否创建?',
      name: 'creatDir',
      default: "true"
    }
  ]
  const confirmAnswers = await inquirer.prompt(confirmPrompt)
  if (confirmAnswers.creatDir) {
    const result = await createDir(dirpath)
    result && inputDirName(dirpath)
  } else {
    log('再见！！！！！！！！！！！')
  }
}

/**
 *
 * @param {*} dir 目录路径
 * @description  // todo 判断路径是否存在
 */
function isExistdir (dir) {
  return fs.existsSync(dir)
}

/**
 *
 * @param {*} dir 目录路径
 * @description // todo 安装路径创建文件
 */
function createDir (dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) {
        log("创建目录失败了！！！！")
        reject(false)
      }
      resolve(true)
    })
  })
}
