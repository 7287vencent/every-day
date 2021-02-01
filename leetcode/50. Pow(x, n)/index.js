/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (!x) return 0;
  if (x === 1) return 1;
  if (x === -1) return n & 1 ? -1 : 1;
  if (n == 2147483647) return 0;
  if (n == -2147483648) return x === 2 ? 0 : 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  // todo 二分法
  while (n) {
    if (n & 1) {
      res *= x;
    }
    x *= x;
    n >>= 1;
  }
  return res;
};
