/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length == 0) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);
  let ans = 1;
  let right = intervals[0][1];
  let n = intervals.length;
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {
      ans++;
      right = intervals[i][1];
    }
  }
  return n - ans;
};
