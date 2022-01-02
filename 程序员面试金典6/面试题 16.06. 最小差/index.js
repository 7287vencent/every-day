/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function (a, b) {
  a.sort((m, n) => m - n);
  b.sort((m, n) => m - n);
  let i = 0,
    j = 0,
    min = 2147483647;
  while (i < a.length && j < b.length) {
    let temp = a[i] - b[j];
    min = Math.min(min, Math.abs(temp));
    if (temp < 0) {
      i++;
    } else {
      j++;
    }
  }
  return min;
};
