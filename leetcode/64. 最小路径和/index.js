/**
 * @param {number[][]} grid
 * @return {number}
 */
// ! 自己的代码
var minPathSum = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  // ? 先处理边界
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }
  for (let i = 1; i < n; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(grid[i][j] + dp[i - 1][j], grid[i][j] + dp[i][j - 1]);
    }
  }
  return dp[n - 1][m - 1];
};

