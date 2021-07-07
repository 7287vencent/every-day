/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let nums = Array.from(num.toString());
  let len = nums.length;
  // ? 记录每个数字最后出现的位置
  let last = [];
  for (let i = 0; i < len; i++) {
    last[nums[i]] = i;
  }
  // ? 从左往右，交换当前与后面的最大值
  for (let i = 0; i < len; i++) {
    // ? 最大值，从 9 开始
    for (let j = 9; j > +nums[i] - 0; j--) {
      if (last[j] > i) {
        // ? 交换
        [nums[i], nums[last[j]]] = [nums[last[j]], nums[i]];
        return Number(nums.join(""));
      }
    }
  }
  return Number(nums.join(""));
};
