/**
 * @param {number[]} nums
 * @return {number}
 */
// todo 方法一： 动态规划
// ? 与方法二的区别只不过是，为开辟 dp 空间
var maxSubArray = function (nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    res = res > nums[i] ? res : nums[i]
  }
  return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// todo 方法二： 动态规划
var maxSubArray = function (nums) {
  const dp = [];

  let res = (dp[0] = nums[0]);
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = nums[i];
    if (dp[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    res = Math.max(res, dp[i]);
  }
  return res;


};

/**
 * @param {number[]} nums
 * @return {number}
 */
// todo 方法三：sum 其实和 方法一与方法二中的 num[i], dp[n] 一样
var maxSubArray = function (nums) {
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    max = Math.max(max, sum);
  }
  return max;
};