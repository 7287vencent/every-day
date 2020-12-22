/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

  nums1 = nums1.concat(nums2).sort((a, b) => a - b)
  let len = nums1.length
  if (len !== 0 && len % 2 === 0) {
    return (nums1[len / 2] + nums1[len / 2 - 1]) / 2
  } else if (len % 2 === 1) {
    return nums1[(len / 2) >>> 0]
  } else {
    return 0
  }
};