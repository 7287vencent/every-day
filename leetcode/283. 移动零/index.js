/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // ? 双指针
  let fast = 0;
  let last = 0;
  while (last < nums.length) {
    if (nums[last]) {
      [nums[fast], nums[last]] = [nums[last], nums[fast]];
      fast++;
    }
    last++;
  }
};
