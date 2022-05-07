/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }
  // ? 排序
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let pos = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (pos[1] >= cur[0]) {
      pos[1] = Math.max(pos[1], cur[1]);
    } else {
      ans.push(pos);
      pos = cur;
    }
  }
  ans.push(pos);

  return ans;
};
