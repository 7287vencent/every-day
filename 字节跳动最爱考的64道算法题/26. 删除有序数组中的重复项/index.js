/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      if (fast - 1 > slow) {
        nums[slow + 1] = nums[fast];
      }
      slow++;
    }
  }
  return slow + 1;
};
