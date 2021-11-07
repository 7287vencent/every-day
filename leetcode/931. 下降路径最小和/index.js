/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  for (let r = n - 2; r >= 0; r--) {
    for (let c = 0; c < n; c++) {
      let best = matrix[r + 1][c];
      if (c > 0) {
        best = Math.min(best, matrix[r + 1][c - 1]);
      }
      if (c + 1 < n) {
        best = Math.min(best, matrix[r + 1][c + 1]);
      }
      matrix[r][c] += best;
    }
  }
  return Math.min(...matrix[0]);
};
