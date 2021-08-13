/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let x = 1;
  for (let num of nums) {
    if (num === 0) return 0;
    if (num < 0) x *= -1;
  }
  return x;
};
