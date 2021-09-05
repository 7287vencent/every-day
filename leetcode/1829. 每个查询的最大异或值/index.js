/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  let maxi = (1 << maximumBit) - 1;
  let n = 0;
  for (let x of nums) {
    n ^= x;
  }
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    ans.push(n ^ maxi);
    n ^= nums[i];
  }
  return ans;
};
