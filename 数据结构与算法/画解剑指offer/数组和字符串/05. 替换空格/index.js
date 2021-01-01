/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      str += '%20'
    } else {
      str += s[i]
    }
  }
  return str
};