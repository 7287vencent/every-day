/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    max = nums[0];
  for (let x of nums) {
    if (pre + x > x) {
      pre += x;
    } else {
      pre = x;
    }
    // pre = Math.max(pre + x, x)
    max = Math.max(pre, max);
  }
  return max;
};
