/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length

  let L = []
  L[0] = 1
  for (let i = 1; i < len; i++) {
    L[i] = nums[i - 1] * L[i - 1]
  }
  let R = []
  R[len - 1] = 1
  for (let i = len - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1]
  }
  let answer = []
  for (let i = 0; i < len; i++) {
    answer[i] = L[i] * R[i]
  }
  return answer
};