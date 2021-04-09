/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = -Infinity;
  let imax = 1;
  let imin = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax];
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);
    max = Math.max(imax, max);
  }
  return max;
};
