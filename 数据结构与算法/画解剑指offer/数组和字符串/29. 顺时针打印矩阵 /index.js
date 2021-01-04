/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let left = 0,
    right = matrix[0].length - 1;
  let top = 0,
    buttom = matrix.length - 1;
  let res = [];
  while (left <= right && top <= buttom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > buttom) break;
    for (let i = top; i <= buttom; i++) {
      res.push(matrix[i][right]);
    }
    if (left > --right) break;
    for (let i = right; i >= left; i--) {
      res.push(matrix[buttom][i]);
    }
    if (top > --buttom) break;
    for (let i = buttom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (++left > right) break;
  }
  return res;
};
