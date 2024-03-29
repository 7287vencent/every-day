/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let res = 0;
  while (n) {
    res += n % k;
    n = (n / k) >> 0;
  }
  return res;
};
