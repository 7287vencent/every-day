/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;
  let f = Array(m).fill(0);
  f[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        f[j] = 0;
        continue;
      }
      if (j > 0 && obstacleGrid[i][j - 1] === 0) {
        f[j] += f[j - 1];
      }
    }
  }
  return f[m - 1];
};
