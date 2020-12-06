#!/usr/bin/env node
// todo 指定js文件运行的环境
// ? 一个终端输入的命令包

const program = require('commander')
program.version(require('../package').version)

// // ? 终端输入的命令
program.command('create')
.description('create project')
.action(
  require('../lib/create') // init 执行的文件
)


// // ? 获取终端输入的命令
program.parse(process.argv)

// console.log("这个是用户输入的命令", process.env.PWD)

