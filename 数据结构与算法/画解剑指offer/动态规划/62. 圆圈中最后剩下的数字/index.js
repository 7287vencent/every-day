/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let f = 0
  for (let i = 2; i <= n; i++) {
    f = (m + f) % i
  }
  return f
};