/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 位运算。
// 先全部异或计算出不同数字a和b的异或值，那么其中为1的位置，就是a和b不同的位
// 根据该位的位置，每个数字当前为0的放一组, 为1的放一组
var singleNumbers = function (nums) {
  let tmp = 0
  for (let num of nums) {
    tmp ^= num
  }
  let div = 1
  while ((div & tmp) === 0) {
    div <<= 1
  }
  let a = 0
  let b = 0
  for (let num of nums) {
    if ((div & num) === 0) {
      a ^= num
    } else {
      b ^= num
    }
  }
  return [b, a]
};