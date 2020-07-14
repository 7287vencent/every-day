/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  nums.sort()
  let lastIndex
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    lastIndex = nums.lastIndexOf(nums[i])
    if (i < lastIndex) {
      res = res + lastIndex - i
    }
  }
  return res
};