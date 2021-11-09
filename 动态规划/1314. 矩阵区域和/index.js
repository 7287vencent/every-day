/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  let m = mat.length,
    n = mat[0].length;
  let pos = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      pos[i][j] =
        pos[i - 1][j] + pos[i][j - 1] - pos[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }
  const get = (m, n, x, y) => {
    x = Math.max(Math.min(m, x), 0);
    y = Math.max(Math.min(n, y), 0);
    return pos[x][y];
  };
  let ans = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] =
        get(m, n, i + k + 1, j + k + 1) -
        get(m, n, i - k, j + k + 1) -
        get(m, n, i + k + 1, j - k) +
        get(m, n, i - k, j - k);
    }
  }
  return ans;
};
