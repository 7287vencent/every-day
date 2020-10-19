/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 方法一：对角折线
  // 两次变换，
  // 先对角变换
  // let len = matrix.length
  // for (let i = 0; i <len; i++) {
  //     for (let j = i; j < len; j++) {
  //         var temp = matrix[i][j]
  //         matrix[i][j] = matrix[j][i]
  //         matrix[j][i] = temp
  //     }
  // }
  // // 然后 把 每一行 的顺序颠倒一下
  // for (let i = 0; i < len; i++) {
  //     matrix[i] = matrix[i].reverse()
  // }
  // 方法二：原地 反转
  let n = matrix.length
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
};