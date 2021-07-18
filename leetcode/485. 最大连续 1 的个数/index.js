/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let res = 0;
  let fast = -1;
  let last = 0;
  while (last <= nums.length) {
    if (nums[last] !== 1) {
      res = Math.max(res, last - fast - 1);
      fast = last;
    }
    last++;
  }
  return res;
};
