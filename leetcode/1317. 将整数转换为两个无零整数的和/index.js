/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let a = 1; a < n; a++) {
    let b = n - a;
    if (!(a + "").includes("0") && !(b + "").includes("0")) {
      return [a, b];
    }
  }
  return [];
};
