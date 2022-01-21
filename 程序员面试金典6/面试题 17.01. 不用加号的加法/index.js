/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  let x = a ^ b;
  let y = (a & b) << 1;

  while (y != 0) {
    let temp = x ^ y;
    y = (x & y) << 1;
    x = temp;
  }

  return x;
};
