/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let n = s.length;
  let f = Array(n + 1).fill(0);
  f[0] = 1;
  for (let i = 1; i <= n; i++) {
    if (s[i - 1] !== "0") {
      f[i] += f[i - 1];
    }
    if (
      i > 1 &&
      s[i - 2] !== "0" &&
      (s[i - 2] - "0") * 10 + (s[i - 1] - "0") <= 26
    ) {
      f[i] += f[i - 2];
    }
  }
  return f[n];
};
