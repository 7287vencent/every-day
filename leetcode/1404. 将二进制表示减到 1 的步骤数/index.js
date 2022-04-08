/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let n = s.length;
  let meet1 = false;
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      // ? 1. 如果没有遇到过1，他只需要 除2操作，1次
      // ? 2. 如果遇到过1，会把自身变成1，2次操作
      ans += meet1 ? 2 : 1;
    } else {
      // ? 这里是 1 的情况
      // ? 1. 如果右边没有 1，则需要加1，除2，两次操作
      // ? 2. 如果右边有1，会把自身变成0，只需要除2，一次操作
      if (!meet1) {
        // ? 控制进位
        if (i !== 0) {
          ans += 2;
        }
        meet1 = true;
      } else {
        ans += 1;
      }
    }
  }
  return ans;
};
