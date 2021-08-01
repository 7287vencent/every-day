/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  for (let num of nums1) {
    !map[num] && (map[num] = 0);
    map[num] += 1;
  }
  let index = 0;
  let res = [];
  for (let num of nums2) {
    let count = map[num] || 0;
    if (count > 0) {
      res[index++] = num;
      count--;
      if (count > 0) {
        map[num] = count;
      } else {
        map[num] = -1;
      }
    }
  }
  return res;
};
