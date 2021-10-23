/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxSum = nums[0],
    minSum = nums[0];
  let pre1 = 0,
    pre2 = 0,
    allSum = 0;
  for (let num of nums) {
    allSum += num;
    pre1 = Math.max(pre1 + num, num);
    maxSum = Math.max(maxSum, pre1);
    pre2 = Math.min(pre2 + num, num);
    minSum = Math.min(minSum, pre2);
  }
  // ? 第三种情况：所有的值都小于0
  if (maxSum < 0) {
    return maxSum;
  }
  // ? 对比其他两种情况的大小
  return Math.max(allSum - minSum, maxSum);
};
