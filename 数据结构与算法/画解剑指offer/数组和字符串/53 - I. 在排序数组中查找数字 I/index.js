/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const getRightMargin = (target) => {
    let left = 0
    let right = nums.length - 1
    let mid
    while (left <= right) {
      mid = (left + right) / 2 | 0
      if (nums[mid] <= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return left
  }
  return getRightMargin(target) - getRightMargin(target - 1)
};
// let nums = [5, 7, 7, 8, 8, 10]
// console.log(search(nums, 7))