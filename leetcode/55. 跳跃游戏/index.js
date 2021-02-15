/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let rightMost = 0;
  for (let i = 0, n = nums.length; i < n; i++) {
    if (i <= rightMost) {
      // ? rightMost 为能走到的最大位置
      rightMost = Math.max(rightMost, i + nums[i]);
      if (rightMost >= n - 1) {
        return true;
      }
    } else {
      // ? 当前这一步都走不到，那绝对走不到最后
      return false;
    }
  }
  return false;
};
