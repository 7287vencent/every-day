/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    var temp = target - nums[i];
    var index = nums.indexOf(temp);
    if (index > -1 && index!=i) {
      return [i, index];
    }
  }
};
var nums = [2, 5, 5, 15]
var target = 10
console.log(twoSum(nums, target))