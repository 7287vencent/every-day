/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return []
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let buttom = matrix.length - 1
  let result = []
  while (left <= right && top <= buttom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    for (let i = top + 1; i <= buttom; i++) {
      result.push(matrix[i][right])
    }
    if (top !== buttom) {
      for (let i = right - 1; i >= left; i--) {
        result.push(matrix[buttom][i])
      }
    }
    if (left !== right) {
      for (let i = buttom - 1; i > top; i--) {
        result.push(matrix[i][left])
      }
    }
    top++
    right--
    buttom--
    left++
  }
  return result
};
