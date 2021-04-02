/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let left = newInterval[0];
  let right = newInterval[1];
  let pos = false;
  let ans = [];
  for (let interval of intervals) {
    if (interval[0] > right) {
      if (!pos) {
        ans.push([left, right]);
        pos = true;
      }
      ans.push(interval);
    } else if (interval[1] < left) {
      ans.push(interval);
    } else {
      left = Math.min(interval[0], left);
      right = Math.max(interval[1], right);
    }
  }
  if (!pos) {
    ans.push([left, right]);
  }
  return ans;
};
