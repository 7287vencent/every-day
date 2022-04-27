/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  // ? 排序
  nums.sort((a, b) => a - b);
  // ? 开始遍历
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    // ? 判断前后是否一样
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        // ? 去除重复的
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return ans;
};
