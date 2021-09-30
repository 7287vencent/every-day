/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let m = (n ^ (n >> 1)) + 1;
  return (m & (m - 1)) === 0;
};
