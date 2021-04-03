/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let pos = null;
  for (let num of nums) {
    if (count === 0) {
      pos = num;
    }
    count = pos === num ? count + 1 : count - 1;
  }
  return pos;
};
