/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let prefix = 0;
  let res = [];
  for (let num of nums) {
    prefix = ((prefix << 1) + num) % 5;
    res.push(prefix === 0);
  }
  return res;
};
