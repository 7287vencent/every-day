/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  let res = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) return res
    // ? 避免重复
    if (nums[i] === nums[i - 1]) continue;
    let l = i + 1
    let r = len - 1
    while (l < r) {
      console.log(nums[i], nums[l], nums[r])
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--
      } else {
        l++
      }
    }
  }
  return res
};

let nums = [-2, 0, 1, 1, 2]

console.log(threeSum(nums))