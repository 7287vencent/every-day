/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxside = 0;
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return maxside;
  }
  let row = matrix.length;
  let col = matrix[0].length;
  let dp = Array(row)
    .fill(0)
    .map(() => Array(col).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === "0") {
        continue;
      }
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
      maxside = Math.max(maxside, dp[i][j]);
    }
  }
  return maxside * maxside;
};
