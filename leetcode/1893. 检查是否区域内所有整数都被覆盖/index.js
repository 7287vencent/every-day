/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const diff = Array(52).fill(0);
  for (let [l, r] of ranges) {
    diff[l]++;
    diff[r + 1]--;
  }
  let cur = 0;
  for (let i = 1; i < 51; i++) {
    cur += diff[i];
    if (left <= i && i <= right && cur <= 0) {
      return false;
    }
  }
  return true;
};
