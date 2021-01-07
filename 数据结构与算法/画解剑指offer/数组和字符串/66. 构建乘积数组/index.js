/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let res = [];
  let left = 1;
  for (let i = 0; i < a.length; i++) {
    res[i] = left;
    left *= a[i];
  }
  let right = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= a[i];
  }
  return res;
};
