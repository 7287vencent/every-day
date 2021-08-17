/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let n = nums.length;
  if (n < 2) {
    return false;
  }
  let map = new Map();
  map.set(0, -1);
  let pre = 0;
  for (let i = 0; i < n; i++) {
    pre = (pre + nums[i]) % k;
    if (map.has(pre)) {
      let preIndex = map.get(pre);
      if (i - preIndex >= 2) {
        return true;
      }
    } else {
      map.set(pre, i);
    }
  }
  return false;
};
