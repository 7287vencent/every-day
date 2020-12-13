/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// todo 方法一： 这个方法更好理解
var hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
    count += n & 1
    n = n >>> 1
  }
  return count
};

// todo 方法二
var hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
    count++
    n = n & (n - 1)
  }
  return count
};