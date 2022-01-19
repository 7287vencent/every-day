/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  let n = nums.length;
  if (n === 0) {
    return 0;
  }
  let dp0 = 0; // ? 第 i 个 不接
  let dp1 = nums[0]; // ? 第 i 个接
  for (let i = 1; i < n; i++) {
    let tdp0 = Math.max(dp0, dp1); // ? i - 1 个，的最大
    let tdp1 = dp0 + nums[i]; // ? 前面不接 + 当前
    dp0 = tdp0;
    dp1 = tdp1;
  }
  return Math.max(dp0, dp1);
};
