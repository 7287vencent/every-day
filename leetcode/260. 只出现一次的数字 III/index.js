/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  let bit = 1;
  // ? 找到最低为1的位置
  while ((bit & res) == 0) {
    bit <<= 1;
  }
  let a = 0,
    b = 0;
  for (let num of nums) {
    // ? 分成两部分
    if ((bit & num) !== 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }
  return [a, b];
};
