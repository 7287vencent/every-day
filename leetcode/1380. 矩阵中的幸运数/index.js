/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let minArr = Array(m).fill(Number.MAX_SAFE_INTEGER);
  let maxArr = Array(n).fill(0);
  // ? 每一行最小，每一列最大
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      minArr[i] = Math.min(minArr[i], matrix[i][j]);
      maxArr[j] = Math.max(maxArr[j], matrix[i][j]);
    }
  }
  // ? 结果
  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === minArr[i] && matrix[i][j] === maxArr[j]) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// todo 方法一：模拟
var luckyNumbers = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const ret = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let isMin = true,
        isMax = true;
      for (let k = 0; k < n; k++) {
        if (matrix[i][k] < matrix[i][j]) {
          isMin = false;
          break;
        }
      }
      if (!isMin) {
        continue;
      }
      for (let k = 0; k < m; k++) {
        if (matrix[k][j] > matrix[i][j]) {
          isMax = false;
          break;
        }
      }
      if (isMax) {
        ret.push(matrix[i][j]);
      }
    }
  }
  return ret;
};
