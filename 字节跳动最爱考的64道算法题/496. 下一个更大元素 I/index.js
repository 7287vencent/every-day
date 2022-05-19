/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];
    // ? 保证最大栈
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  let res = Array(nums1.length)
    .fill(0)
    .map((_, i) => map.get(nums1[i]));
  return res;
};
