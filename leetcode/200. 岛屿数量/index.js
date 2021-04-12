/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dfs = (grid, r, c) => {
    let rw = grid.length;
    let cw = grid[0].length;
    if (r < 0 || c < 0 || r >= rw || c >= cw || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
  };
  if (grid.length === 0) {
    return 0;
  }
  let rw = grid.length;
  let cw = grid[0].length;
  let num = 0;
  for (let i = 0; i < rw; i++) {
    for (let j = 0; j < cw; j++) {
      if (grid[i][j] === "1") {
        num++;
        // 作用就是把连在一起的1变成0
        dfs(grid, i, j);
      }
    }
  }
  return num;
};
