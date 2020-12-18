/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/\W|_/g, '').toLocaleLowerCase()
  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false
    }
  }
  return true
};