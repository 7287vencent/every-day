/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let ans = Array(n);
  for (let i = 0, j = n - 1, pos = n - 1; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      ans[pos] = nums[i] * nums[i];
      i++;
    } else {
      ans[pos] = nums[j] * nums[j];
      j--;
    }
    pos--;
  }
  return ans;
};
