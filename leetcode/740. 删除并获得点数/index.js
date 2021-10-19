/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const rob = (nums, start, end) => {
    let first = start,
      second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
      let temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    return second;
  };
  // ? 1. 先找出最大
  let maxNum = 0;
  for (let val of nums) {
    maxNum = Math.max(val, maxNum);
  }
  // ? 生成数组
  let dp = Array(maxNum + 1).fill(0);
  for (let num of nums) {
    dp[num] += num;
  }
  return rob(dp, 0, dp.length - 1);
};
