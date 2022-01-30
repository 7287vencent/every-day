/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
  let m = land.length;
  let n = land[0].length;
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || land[i][j]) return;
    // ? 标记为 1， 防止再次便利
    land[i][j] = 1;
    // ? 面积 + 1
    area++;
    // ? 八个方向
    dfs(i - 1, j - 1);
    dfs(i - 1, j);
    dfs(i - 1, j + 1);
    dfs(i, j - 1);
    dfs(i, j + 1);
    dfs(i + 1, j - 1);
    dfs(i + 1, j);
    dfs(i + 1, j + 1);
  };
  const res = [];
  let area = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // ? 水域
      if (!land[i][j]) {
        area = 0;
        dfs(i, j);
        // ? 结果保存
        res.push(area);
      }
    }
  }
  res.sort((a, b) => a - b);
  return res;
};
