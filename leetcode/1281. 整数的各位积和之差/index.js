/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let mul = 1,
    add = 0;
  while (n !== 0) {
    let d = n % 10;
    n = (n / 10) >> 0;
    mul *= d;
    add += d;
  }
  return mul - add;
};
