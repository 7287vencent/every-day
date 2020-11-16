/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) return false
  let n = matrix.length - 1
  let m = 0
  let cur = matrix[n][m]
  while (m < matrix[0].length && n >= 0) {
    cur = matrix[n][m]
    if (target === cur) {
      return true
    } else if (target < cur) {
      n--
    } else if (target > cur) {
      m++
    }
  }
  return false
};

let arr = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
console.log(findNumberIn2DArray(arr, 5))