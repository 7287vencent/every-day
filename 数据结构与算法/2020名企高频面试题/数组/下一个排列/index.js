/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) {
    return nums
  }
  // ? 第一步
  let left = nums.length - 2
  // ?找到 "尽可能小的数"
  while (left >= 0 && nums[left] >= nums[left + 1]) {
    left--
  }
  if (left >= 0) {
    // ?找到 "尽可能大的数"
    let right = nums.length - 1
    while (right > left) {
      if (nums[right] <= nums[left]) {
        right--
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        break
      }
    }
  }
  left += 1
  right = nums.length - 1
  // ? left 与 right 之间的区间 反转
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
};
