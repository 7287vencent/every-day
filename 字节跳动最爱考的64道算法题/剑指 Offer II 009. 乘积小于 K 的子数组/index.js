/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let n = nums.length,
    res = 0;
  let sum = 1,
    i = 0;
  for (let j = 0; j < n; j++) {
    sum *= nums[j];
    while (i <= j && sum >= k) {
      sum /= nums[i];
      i++;
    }
    res += j - i + 1;
  }
  return res;
};
