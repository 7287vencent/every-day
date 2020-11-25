/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let res = []
  let left = 1
  for (let i = 0; i < a.length; i++) { // 左三角
    res[i] = left
    left *= a[i]
  }
  let right = 1
  for (let i = a.length - 1; i >= 0; i--) { // 又三角
    res[i] *= right
    right *= a[i]
  }
  return res
};