/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const fn = (s, flag) => {
    let left = 0, right = s.length - 1
    while (left < right && s[left] === s[right]) {
      left++
      right--
    }
    if (right <= left) {
      return true
    }
    if (flag) {
      return fn(s.slice(left, right), false) || fn(s.slice(left + 1, right + 1), false)
    }
    return false
  }
  return fn(s, true)
};