


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length

  let answer = []
  answer[0] = 1
  for (let i = 1; i < len; i++) {
    answer[i] = nums[i - 1] * answer[i - 1]
  }
  let r = 1
  for (let i = len - 1; i >= 0; i--) {
    answer[i] = answer[i] * r
    r *= nums[i]
  }
  return answer
};