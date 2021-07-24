/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  for (let op of ops) {
    m = Math.min(op[0], m);
    n = Math.min(op[1], n);
  }
  return m * n;
};
