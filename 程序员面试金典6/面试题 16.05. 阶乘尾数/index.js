/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0;
  while (n >= 5) {
    res += (n /= 5) | 0;
  }
  return res;
};
