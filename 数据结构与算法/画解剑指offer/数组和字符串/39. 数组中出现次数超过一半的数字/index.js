/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let cur = 0;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      cur = num;
    }
    if (cur === num) {
      count++;
    } else {
      count--;
    }
  }
  return cur;
};
