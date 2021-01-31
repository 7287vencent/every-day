/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = [];
  if (nums.length < 4) {
    return result;
  }
  // 排序
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    //
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      return result;
    }
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) {
        continue;
      }
      let l = j + 1,
        r = len - 1;
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return result;
};

let nums = [0, 0, 0, 0],
  target = 0;
console.log(fourSum(nums, target));
