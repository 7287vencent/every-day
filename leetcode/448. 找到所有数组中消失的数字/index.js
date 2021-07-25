/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  for (let num of nums) {
    let x = (num - 1) % len;
    nums[x] += len;
    console.log(nums);
  }
  let res = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] <= len) {
      res.push(i + 1);
    }
  }
  return res;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
