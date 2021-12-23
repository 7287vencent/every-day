/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let init = image[sr][sc];
  let r = image.length;
  let c = image[0].length;
  let vis = Array(r)
    .fill(0)
    .map(() => Array(c).fill(false));
  let dfs = (i, j) => {
    if (
      i >= 0 &&
      i < r &&
      j >= 0 &&
      j < c &&
      image[i][j] === init &&
      !vis[i][j]
    ) {
      image[i][j] = newColor;
      vis[i][j] = true;
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  dfs(sr, sc);
  return image;
};
