/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    let left = i - k < 0 ? 0 : i - k;
    let right = i + k + 1;
    while (left <= right && left !== i) {
      if (Math.abs(nums[left] - nums[i]) <= t) return true;
      left++;
    }
  }
  return false;
};
