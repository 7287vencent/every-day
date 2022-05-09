/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const find = (nums, target, lower) => {
    let left = 0,
      right = nums.length - 1,
      ans = nums.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  };
  let ans = [-1, -1];
  const leftIndex = find(nums, target, true);
  const rightIndex = find(nums, target, false) - 1;
  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    ans = [leftIndex, rightIndex];
  }
  return ans;
};
