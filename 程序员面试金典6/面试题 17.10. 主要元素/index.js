/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let pos = -1;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      pos = num;
    }
    if (pos === num) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  for (let num of nums) {
    if (pos === num) {
      count++;
    }
  }
  return count > nums.length / 2 ? pos : -1;
};
