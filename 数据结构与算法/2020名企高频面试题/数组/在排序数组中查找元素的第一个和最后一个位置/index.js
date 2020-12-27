/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearch = (lower) => {
    let left = 0
    let right = nums.length - 1
    let res = nums.length
    while (left <= right) {
      let mid = (left + right) / 2 >>> 0
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1
        res = mid
      } else {
        left = mid + 1
      }
    }
    return res
  }
  let leftIndex = binarySearch(true)
  let rightIndex = binarySearch(false) - 1
  if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
    return [leftIndex, rightIndex]
  } else {
    return [-1, -1]
  }
};