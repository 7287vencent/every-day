/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let res = 0
  let f = []
  for (let i = 0; i < nums.length; i++) {
    let tem = 1
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        tem = Math.max(tem, f[j] + 1)
      }
    }
    f[i] = tem
    res = Math.max(res, tem)
  }
  return res
};