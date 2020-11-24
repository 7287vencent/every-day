/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    if (nums[start] + nums[end] < target) {
      start++
    } else if (nums[start] + nums[end] > target) {
      end--
    } else {
      return [nums[start], nums[end]]
    }
  }
};

let nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))