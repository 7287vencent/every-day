/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let start = 0, end = nums.length - 1
  let temp
  while (start < end) {
    while (start < end && nums[start] % 2 === 1) {
      start++
    }
    while (start < end && nums[end] % 2 === 0) {
      end--
    }
    temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
  }
  return nums
};

var exchange = function (nums) {
  const length = nums.length;
  if (!length) {
    return [];
  }

  let i = 0,
    j = length - 1;
  while (i < j) {
    while (i < length && nums[i] % 2) i++;
    while (j >= 0 && nums[j] % 2 === 0) j--;

    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  return nums;
};

