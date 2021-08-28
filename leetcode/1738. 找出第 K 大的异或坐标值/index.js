/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  let m = matrix.length,
    n = matrix[0].length;
  let diff = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  let res = [];
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      diff[i][j] =
        diff[i - 1][j] ^
        diff[i][j - 1] ^
        diff[i - 1][j - 1] ^
        matrix[i - 1][j - 1];
      res.push(diff[i][j]);
    }
  }
  res.sort((a, b) => b - a);
  return res[k - 1];
};
