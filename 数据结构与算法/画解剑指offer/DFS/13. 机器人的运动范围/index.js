/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  // i j m n k visited
  const dfs = (i, j, m, n, k, visited) => {
    if (
      i >= m ||
      j >= n ||
      (i % 10) + ((i / 10) >>> 0) + ((j / 10) >>> 0) + (j % 10) > k ||
      visited[i][j]
    ) {
      return 0;
    }
    visited[i][j] = true;
    return (
      dfs(i, j + 1, m, n, k, visited) + dfs(i + 1, j, m, n, k, visited) + 1
    );
  };

  let visited = Array(m)
    .fill()
    .map(item => {
      return Array(n).fill(0);
    });
  return dfs(0, 0, m, n, k, visited);
};