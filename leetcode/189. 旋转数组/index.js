/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k %= n;
    for (let i = 0; i < k; i++) {
        let temp = nums[n - 1];
        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }

    console.log(nums)
};

let nums = [1,2,3,4,5,6,7]
let k = 3

rotate(nums, k)