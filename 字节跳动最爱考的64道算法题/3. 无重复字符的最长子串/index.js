/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hash = new Set();
  let n = s.length;
  let l = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      hash.delete(s[i - 1]);
    }
    while (l < n && !hash.has(s[l])) {
      hash.add(s[l]);
      l++;
    }
    ans = Math.max(ans, l - i);
  }
  return ans;
};
