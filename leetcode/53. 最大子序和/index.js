/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let max = nums[0];
  for (let num of nums) {
    pre = Math.max(pre + num, num);
    max = Math.max(max, pre);
  }
  return max;
};
