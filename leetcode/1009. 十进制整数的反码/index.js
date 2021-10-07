/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  if (n === 0) {
    return 1;
  }
  let num = 1;
  while (num <= n) {
    num <<= 1;
  }
  return num - n - 1;
};
