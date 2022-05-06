/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0;
  }
  // ?排序
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1];
  let ans = 1;
  for (let v of points) {
    if (v[0] > pos) {
      pos = v[1];
      ans += 1;
    }
  }
  return ans;
};
