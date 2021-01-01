/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) {
    return false
  }
  let top = matrix.length - 1
  let left = 0
  while (top >= 0 && left < matrix[0].length) {
    if (matrix[top][left] === target) {
      return true
    } else if (matrix[top][left] < target) {
      left++
    } else {
      top--
    }
  }
  return false
};