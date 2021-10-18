/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(...nums);
  }
  let n = nums.length;
  const rob = (start, end) => {
    let first = nums[start],
      second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
      let temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    return second;
  };
  return Math.max(rob(0, n - 2), rob(1, n - 1));
};
