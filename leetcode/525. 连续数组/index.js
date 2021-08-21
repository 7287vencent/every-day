/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  let current = 0;
  map.set(0, -1);
  let res = 0;
  for (let [i, num] of nums.entries()) {
    if (num === 1) {
      current++;
    } else {
      current--;
    }
    if (map.has(current)) {
      res = Math.max(i - map.get(current), res);
    } else {
      map.set(current, i);
    }
  }
  return res;
};
