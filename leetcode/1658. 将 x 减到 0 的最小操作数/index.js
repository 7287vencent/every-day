/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  let count = sum - x;
  if (count < 0) {
    return -1;
  }
  let left = 0;
  let right = 0;
  let max = -1;
  sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum > count) {
      sum -= nums[left];
      left++;
    }
    if (sum === count) {
      max = Math.max(max, right - left + 1);
    }
    right++;
  }
  return max < 0 ? -1 : nums.length - max;
};
