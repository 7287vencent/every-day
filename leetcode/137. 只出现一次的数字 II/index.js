/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (let num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 !== 0) {
      ans |= 1 << i;
    }
  }
  return ans;
};
