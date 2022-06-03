/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = (end = 0);
  let ans = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  while (end < nums.length) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};
