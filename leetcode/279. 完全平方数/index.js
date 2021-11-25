/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let f = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, f[i - j * j]);
    }
    f[i] = min + 1;
  }
  return f[n];
};
