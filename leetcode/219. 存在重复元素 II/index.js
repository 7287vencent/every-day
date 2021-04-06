/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hash = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true;
    }
    hash.add(nums[i]);
    if (hash.size > k) {
      hash.delete(nums[i - k]);
    }
  }
  return false;
};
