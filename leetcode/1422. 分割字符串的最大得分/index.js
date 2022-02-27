/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // ? 1. 统计
  let right1 = 0;
  for (let c of s) {
    if (c === "1") {
      right1++;
    }
  }
  let res = 0;
  // ? 左侧
  let left0 = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      left0++;
    } else {
      right1--;
    }
    res = Math.max(res, left0 + right1);
  }
  return res;
};
