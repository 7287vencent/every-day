/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let ans = 0,
    last = -1;
  for (let i = 0; i < 32; i++) {
    if (((n >>> i) & 1) !== 0) {
      if (last >= 0) {
        ans = Math.max(ans, i - last);
      }
      last = i;
    }
  }
  return ans;
};
