/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    n = s.length,
    j = 0,
    m = t.length;
  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === n;
};
