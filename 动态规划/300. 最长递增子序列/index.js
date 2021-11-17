/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let dp = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let res = 0;
  let tails = [];
  for (let num of nums) {
    let i = 0,
      j = res;
    // todo 二分查找
    while (i < j) {
      let m = ((i + j) / 2) >> 0;
      if (tails[m] >= num) {
        j = m;
      } else {
        i = m + 1;
      }
    }
    tails[i] = num;
    if (j == res) {
      res++;
    }
  }
  return res;
};
