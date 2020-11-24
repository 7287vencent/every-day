/**
 * @param {string} s
 * @return {string}
 */

// 思路是 对的，但是代码的逻辑其实不太 美
// var reverseWords = function (s) {
//   let res = ''
//   s = s.trim()
//   let start = end = s.length - 1
//   while (start > 0) {
//     if (s[start] === ' ' && s[end] !== ' ') {
//       res += s.substring(start + 1, end + 1) + ' '
//       start--
//       end = start
//     } else if (s[start] !== ' ') {
//       start--
//     } else {
//       start--
//       end = start
//     }
//   }
//   // 特殊处理 start = 0 的情况
//   res += s.substr(start, end + 1)
//   return res
// };

var reverseWords = function (s) {
  let res = ''
  s = s.trim()
  let start = end = s.length - 1
  while (start >= 0) {
    while (start >= 0 && s[start] !== ' ') {
      start--
    }
    res += s.substring(start + 1, end + 1) + ' '
    while (start >= 0 && s[start] === ' ') {
      start--
    }
    end = start
  }
  return res.trim()
};


var reverseWords = function (s) {
  return s.split(' ').filter(val => val).reverse().join(' ');
};

console.log(reverseWords('the sky is blue'))