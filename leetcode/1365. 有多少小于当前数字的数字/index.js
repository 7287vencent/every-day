/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let cnt = Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    cnt[nums[i]] += 1;
  }
  for (let i = 1; i < 101; i++) {
    cnt[i] += cnt[i - 1];
  }
  console.log(cnt);
  let res = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i] ? cnt[nums[i] - 1] : 0;
  }
  return res;
};
