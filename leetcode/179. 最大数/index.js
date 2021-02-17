/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // ? 1. 变成字符串并排序
  nums.sort((a, b) => {
    return "" + b + a - ("" + a + b);
  });
  // ? 2.单独处理 0
  if (nums[0] == "0") {
    return "0";
  }
  // ? 3.拼接成字符穿
  return nums.join("");
};
