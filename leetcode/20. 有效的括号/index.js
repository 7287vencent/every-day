/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 优化
  if (typeof s != 'string') return
  let map = { '(': ')', '{': '}', '[': ']' }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    // 左括号
    if (map[s[i]]) {
      stack.push(s[i])
    } else {
      if (map[stack.pop()] !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
  // 第一版
  // let map = new Map([
  //     ['(', ')'],
  //     ['{', '}'],
  //     ['[', ']']
  // ])
  // let stack = []
  // let arr = s.split('')
  // for (let cb of arr) {
  //     // 代表的是左括号 需要入栈
  //     if (map.has(cb)) {

  //         stack.push(cb)
  //     } else {
  //         // 代表的是 右括号，需要出战，
  //         // 判断栈中最后一个字符是否与当前字符匹配,匹配栈就出去
  //        if(map.get(stack[stack.length - 1]) == cb) {
  //            stack.pop()
  //        } else {
  //         return false
  //        }
  //     }
  // }
  // return stack.length === 0
};