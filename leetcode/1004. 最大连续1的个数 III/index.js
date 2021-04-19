/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let i = 0;
  let j = 0;
  let ans = 0;
  while (j < nums.length) {
    if (nums[j] == 0) {
      k--;
    }
    while (k < 0) {
      if (nums[i] === 0) {
        k++;
      }
      i++;
    }
    ans = Math.max(ans, j - i + 1);
    j++;
  }
  return ans;
};
