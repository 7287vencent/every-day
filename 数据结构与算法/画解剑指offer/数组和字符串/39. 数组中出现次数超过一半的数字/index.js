/**
 * @param {number[]} nums
 * @return {number}
 */
//投票算法的原理是通过不断消除不同元素直到没有不同元素，剩下的元素就是我们要找的元素。
var majorityElement = function (nums) {
  let cur = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cur) {
      count++
    } else if (count === 0) {
      cur = nums[i]
      count++
    } else {
      count--
    }
  }
  return cur
};