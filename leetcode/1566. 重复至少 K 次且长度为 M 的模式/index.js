/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  let n = arr.length;
  for (let l = 0; l <= n - m * k; l++) {
    let offset = 0;
    for (offset = 0; offset < m * k; offset++) {
      if (arr[l + offset] !== arr[l + (offset % m)]) {
        break;
      }
    }
    if (offset === m * k) {
      return true;
    }
  }
  return false;
};
