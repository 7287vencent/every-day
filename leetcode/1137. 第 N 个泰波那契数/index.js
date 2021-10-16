/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  let p = 0,
    q = 0,
    r = 1,
    s = 1;
  for (let i = 3; i <= n; i++) {
    p = q;
    q = r;
    r = s;
    s = p + q + r;
  }
  return s;
};
