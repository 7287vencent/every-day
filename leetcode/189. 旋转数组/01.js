/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let length = nums.length
  k %= length
  let arr1 = nums.splice(0, length - k)
  nums = nums.concat(arr1)
  console.log(nums)
};

let nums = [1,2,3,4,5,6,7]
let k = 3

rotate(nums, k)