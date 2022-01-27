/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
  nums.sort((a, b) => a - b);
  let l = 0,
    r = nums.length - 1;
  let res = [];
  while (l < r) {
    let t = target - nums[l];
    if (nums[r] === t) {
      res.push([nums[l], nums[r]]);
      l += 1;
      r -= 1;
    } else if (nums[r] > t) {
      r -= 1;
    } else {
      l += 1;
    }
  }
  return res;
};
