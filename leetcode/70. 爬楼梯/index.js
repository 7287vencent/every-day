/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let q = 0,
    p = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
