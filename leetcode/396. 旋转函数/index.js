/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  let f0 = 0;
  let sum = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    f0 += i * nums[i];
    sum += nums[i];
  }
  let ans = f0;
  for (let i = 1; i < n; i++) {
    f0 = f0 + sum - nums[n - i] * n;
    ans = Math.max(ans, f0);
  }
  return ans;
};
