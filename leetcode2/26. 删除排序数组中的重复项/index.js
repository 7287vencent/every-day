/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums === null || nums.length == 0) return 0
  // 双指针
  let pre = 0
  let last = 1
  while (last < nums.length) {
    if (nums[pre] !== nums[last]) {
      if (last - pre > 1) {
        nums[pre + 1] = nums[last]
      }
      pre++
    }
    last++
  }
  return pre + 1
};