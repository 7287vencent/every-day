/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let r = matrix.length - 1;
  let c = matrix[0].length - 1;
  let i = r,
    j = 0;
  while (i >= 0 && j <= c) {
    if (matrix[i][j] < target) {
      j++;
    } else if (matrix[i][j] > target) {
      i--;
    } else {
      return true;
    }
  }
  return false;
};

let arr = [[-5]];

console.log(searchMatrix(arr, -5));
