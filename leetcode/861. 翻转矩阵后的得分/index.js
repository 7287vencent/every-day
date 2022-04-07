/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let ret = m * (1 << (n - 1));
  for (let j = 1; j < n; j++) {
    let one = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][0] === 0) {
        one += grid[i][j];
      } else {
        one += 1 - grid[i][j]; // ? 反转
      }
    }
    let k = Math.max(one, m - one);
    ret += k * (1 << (n - j - 1));
  }
  return ret;
};
