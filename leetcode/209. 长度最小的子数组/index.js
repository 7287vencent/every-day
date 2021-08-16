/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length;
  if (n === 0) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = Infinity;
  while (end < n) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Infinity ? 0 : ans;
};
