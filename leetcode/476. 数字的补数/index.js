/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let res = 0;
  for (let i = 1; i <= 32; i++) {
    res = Math.pow(2, i) - 1;
    if (res >= num) {
      break;
    }
  }
  return res ^ num;
};
