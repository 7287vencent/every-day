/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// todo 方法一
var add = function (a, b) {
  let n, curry
  while (b !== 0) {
    curry = (a & b) << 1 // 进位
    n = a ^ b // 进位后剩下的 1
    a = n
    b = curry
  }
  return a
};

// ? 两个方法思路完全一样

// todo 方法二
var add = function (a, b) {
  while (b != 0) {
    let c = (a & b) << 1
    a ^= b
    b = c
  }
  return a
};