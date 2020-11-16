/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let res = ''
  let i = 0
  while (i < s.length) {
    if (s[i] === ' ') {
      res += '%20'
    } else {
      res += s[i]
    }
    i++
  }
  return res
};