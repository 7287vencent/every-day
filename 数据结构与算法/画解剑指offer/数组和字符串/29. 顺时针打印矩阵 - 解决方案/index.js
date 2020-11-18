/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return matrix
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  let res = []
  let x = 0
  while (true) {
    for (let i = left; i <= right; i++) {
      res[x++] = matrix[top][i]
    }
    if (++top > bottom) break
    for (let i = top; i <= bottom; i++) {
      res[x++] = matrix[i][right]
    }
    if (left > --right) break
    for (let i = right; i >= left; i--) {
      res[x++] = matrix[bottom][i]
    }
    if (top > --bottom) break
    for (let i = bottom; i >= top; i--) {
      res[x++] = matrix[i][left]
    }
    if (++left > right) break
  }
  return res;
};


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0)
    return [];
  let top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1, left = 0;
  let res = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) { //从左到右
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) { //从上到下
      res.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && top <= bottom; i--) {    //从右到左
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && left <= right; i--) {    //从下到上
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};