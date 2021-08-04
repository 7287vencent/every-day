/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let min = nums[0];
  let max = nums[0];
  for (let x of nums) {
    min = Math.min(min, x);
    max = Math.max(max, x);
  }
  return Math.max(0, max - min - 2 * k);
};
