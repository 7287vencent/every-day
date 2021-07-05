/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gl = g.length;
  let sl = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < gl, j < sl; i++, j++) {
    while (j < sl && g[i] > s[j]) {
      j++;
    }
    if (g[i] <= s[j]) {
      count++;
    }
  }
  return count;
};
