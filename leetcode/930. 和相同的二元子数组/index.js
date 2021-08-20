/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  let map = new Map();
  let res = 0;
  for (let num of nums) {
    map.set(sum, (map.get(sum) || 0) + 1);
    sum += num;
    res += map.get(sum - goal) || 0;
  }
  return res;
};
