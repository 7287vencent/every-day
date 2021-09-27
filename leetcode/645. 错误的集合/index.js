/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let errArr = Array(2).fill(0);
  let prev = 0;
  let curr = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    if (curr === prev) {
      errArr[0] = prev;
    } else if (curr - prev > 1) {
      errArr[1] = prev + 1;
    }
    prev = curr;
  }
  if (curr == nums.length - 1) {
    errArr[1] = nums.length;
  }
  return errArr;
};
