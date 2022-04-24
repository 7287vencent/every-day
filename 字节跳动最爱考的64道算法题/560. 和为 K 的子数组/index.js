/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let pre = 0;
  let map = new Map();
  map.set(0, 1); // ? 初始化
  let count = 0;
  for (let num of nums) {
    pre += num;
    if (map.has(pre - k)) {
      // ?
      count += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;
};
