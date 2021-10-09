/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    let m = (i + j) >>> 1;
    if (nums[m] === m) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return i;
};
