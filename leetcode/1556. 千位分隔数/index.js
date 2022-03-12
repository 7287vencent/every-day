/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  return n.toString().replace(/(?!^)(?=(\d{3})+$)/g, ".");
};
