/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      arr.push([nums1[i], nums2[j]]);
    }
  }
  return arr
    .sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
    .slice(0, k)
    .map(a => [a[0], a[1]]);
};
