/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;
  let res = Array(n).fill(-1);
  let stack = [];
  // ? 存在循环，需要遍历两次
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      res[stack[stack.length - 1]] = nums[i % n];
      stack.pop();
    }
    stack.push(i % n);
  }
  return res;
};
