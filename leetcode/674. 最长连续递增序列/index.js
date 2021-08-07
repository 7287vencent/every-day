/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let ans = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    ans = count > ans ? count : ans;
  }
  return ans;
};
