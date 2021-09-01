/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let n = nums.length;
  let preSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = nums[i] + preSum[i];
  }
  let ans = Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] =
      i * nums[i] - preSum[i] + preSum[n] - preSum[i] - (n - i) * nums[i];
  }
  return ans;
};
