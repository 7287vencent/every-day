/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  // ? 按照开始时间排序
  intervals.sort((a, b) => a[0] - b[0]);
  let arr = [intervals[0]]; // 正在开会的房子
  let res = 1;
  for (let i = 1; i < intervals.length; i++) {
    while (arr.length && arr[0][1] <= intervals[i][0]) {
      // ? 当前房间可以空出来了
      arr.shift();
    }
    arr.push(intervals[i]);
    res = Math.max(res, arr.length);
    // ? 按照结束时间排序
    arr.sort((a, b) => a[1] - b[1]);
  }
  return res;
};
