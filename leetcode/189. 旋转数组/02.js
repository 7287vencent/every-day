/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let length = nums.length
  k %= length
  resolve(nums, 0 , length - 1)
  resolve(nums, 0, k - 1)
  resolve(nums, k, length - 1)
  console.log(nums)
};

function resolve(nums, start, end) {
while(start < end) {
  let temp = nums[start]
  nums[start++] = nums[end]
  nums[end--] = temp
}
}
let nums = [1,2,3,4,5,6,7]
let k = 3

rotate(nums, k)