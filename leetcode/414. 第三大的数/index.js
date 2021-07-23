/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max = undefined;
  let mid = undefined;
  let min = undefined;
  for (let num of nums) {
    if (num === max || num === mid) {
      continue;
    } else if (max === undefined || num > max) {
      [min, mid, max] = [mid, max, num];
    } else if (mid === undefined || num > mid) {
      [min, mid] = [mid, num];
    } else if (min === undefined || num > min) {
      min = num;
    }
  }
  if (min === undefined || mid === undefined) {
    return max;
  }
  return min;
};
