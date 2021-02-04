/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let num = x;
  let cur = 0;
  while (num) {
    cur = cur * 10 + (num % 10);
    num = (num / 10) | 0;
  }
  return cur == x;
};
