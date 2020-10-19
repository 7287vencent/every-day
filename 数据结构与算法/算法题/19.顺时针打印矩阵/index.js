function printMatrix (matrix) {
  // write code here
  let row = matrix.length
  let col = matrix[0].length
  let res = []
  if (row === 0 || col === 0) return res
  let left = 0, top = 0, right = col - 1, bottom = row - 1
  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    // top to bottom 
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    // 如果不止 列
    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
    }
    if (left !== right) {
      // 不能等 ，因为 第一行 已经去掉了
      for (let i = bottom - 1; i > top; i--) {
        res.push(matrix[i][top])
      }
    }
    left++
    top++
    right--
    bottom--
  }
  return res
}