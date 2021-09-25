/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let res = Array(n + 1).fill(0);
  let hix = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) == 0) {
      hix = i;
    }
    res[i] = res[i - hix] + 1;
  }
  return res;
};
