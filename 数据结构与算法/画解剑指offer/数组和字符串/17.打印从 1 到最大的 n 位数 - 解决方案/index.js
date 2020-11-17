/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let sum = 1
  for (let i = 0; i < n; i++) {
    sum *= 10
  }
  let res = []
  for (let i = 0; i < sum - 1; i++) {
    res[i] = i + 1
  }
  return res
};

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let len = Math.pow(10, n) - 1;
  return Array.from({ length: len }, (item, index) => index + 1);
};