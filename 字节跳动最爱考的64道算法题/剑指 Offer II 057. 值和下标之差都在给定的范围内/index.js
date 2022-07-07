/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const hash = new Map();

  const getId = (num, t) => {
    return Math.floor(num / (t + 1));
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const id = getId(num, t);

    if (hash.has(id)) return true;
    if (hash.has(id - 1) && Math.abs(hash.get(id - 1) - num) <= t) return true;
    if (hash.has(id + 1) && Math.abs(hash.get(id + 1) - num) <= t) return true;

    hash.set(id, num);
    if (i >= k) {
      hash.delete(getId(nums[i - k], t));
    }
  }

  return false;
};
