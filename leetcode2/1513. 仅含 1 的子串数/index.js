/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  return s.split(/0+/).reduce((sum, n) => sum + (n.length + 1) * n.length / 2, 0) % (10 ** 9 + 7)
};