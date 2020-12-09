/**
 * @param {number[][]} grid
 * @return {number}
 */
// todo 方法一
var maxValue = function (grid) {
  let row = grid.length
  let col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
        continue
      }
      if (i === 0) {
        grid[i][j] += grid[i][j - 1]
      } else if (j === 0) {
        grid[i][j] += grid[i - 1][j]
      } else {
        grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1])
      }
    }
  }
  return grid[row - 1][col - 1]
};

// todo 方法一与方法二的差别就是，方法一没有多开辟空间

/**
 * @param {number[][]} grid
 * @return {number}
 */
// todo 方法二
var maxValue = function (grid) {
  let value = [];
  let m = 0;
  let n = 0;
  m = grid.length;
  n = grid[0].length;
  for (let i = 0; i < m; i++) {
    value[i] = [];
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        value[i][j] = grid[i][j];
      } else if (i == 0) {
        value[i][j] = value[i][j - 1] + grid[i][j];
      } else if (j == 0) {
        value[i][j] = value[i - 1][j] + grid[i][j];
      } else {
        value[i][j] = Math.max(value[i - 1][j] + grid[i][j], value[i][j - 1] + grid[i][j]);
      }
    }
  }
  return value[m - 1][n - 1];

};