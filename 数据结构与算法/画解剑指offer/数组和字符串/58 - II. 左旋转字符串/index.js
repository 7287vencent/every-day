/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let res = "";
  let len = s.length;
  for (let i = n; i < len; i++) {
    res += s[i];
  }
  for (let i = 0; i < n; i++) {
    res += s[i];
  }
  return res;
};
