/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let i = 0;
  let n = nums.length;
  let res = [];
  while (i < n) {
    let low = i;
    i++;
    while (i < n && nums[i] === nums[i - 1] + 1) {
      i++;
    }
    let high = i - 1;
    let temp = ["" + nums[low]];
    if (low < high) {
      temp.push("->");
      temp.push("" + nums[high]);
    }
    res.push(temp.join(""));
  }
  return res;
};
