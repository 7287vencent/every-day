/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let res = 0;
  let n = nums.length;
  for (let num of nums) {
    res |= num;
  }
  return res << (n - 1);
};
