/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  nums.sort((a, b) => b - a);
  let res = [];
  let pre = 0;
  for (let num of nums) {
    res.push(num);
    pre += num;
    sum -= num;
    if (pre > sum) {
      break;
    }
  }
  return res;
};
