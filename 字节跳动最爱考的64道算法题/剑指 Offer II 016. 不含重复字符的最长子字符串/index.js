/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hash = new Set();
  let ans = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      hash.delete(s[i - 1]);
    }
    while (l < s.length && !hash.has(s[l])) {
      hash.add(s[l]);
      l++;
    }
    ans = Math.max(ans, l - i);
  }
  return ans;
};
