/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const n of nums) map.set(n, 1 + (map.get(n) || 0));

  const arr = [];
  for (const kv of map) arr.push(kv);
  return arr
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(a => a[0]);
};
