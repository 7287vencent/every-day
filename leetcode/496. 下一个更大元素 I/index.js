/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = {};
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map[stack.pop()] = nums2[i];
    }
    stack.push(nums2[i]);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map[nums1[i]] || -1;
  }
  return res;
};
