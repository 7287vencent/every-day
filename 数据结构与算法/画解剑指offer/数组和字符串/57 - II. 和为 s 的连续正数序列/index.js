/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let left = 1
  let right = 2
  let res = []
  while (left < right) {
    let sum = (left + right) * (right - left + 1) / 2
    if (sum === target) {
      let arr = []
      for (let k = left; k <= right; k++) {
        arr.push(k)
      }
      res.push(arr)
      right++
    } else if (sum < target) {
      right++
    } else {
      left++
    }
  }
  return res
};

console.log(findContinuousSequence(9))