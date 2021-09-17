/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let n = s.length,
    last = 0,
    i = 0;
  let ans = 0;
  while (i < n) {
    let c = s[i];
    let count = 0;
    while (i < n && s[i] == c) {
      i++;
      count++;
    }
    ans += Math.min(last, count);
    last = count;
  }
  return ans;
};
