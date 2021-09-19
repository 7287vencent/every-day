/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    if (nums[i] % 2 === 0) i++;
    if (nums[j] % 2 === 1) j--;
  }
  return nums;
};
