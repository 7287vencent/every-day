/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let r = -1,
    ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      set.delete(s[i - 1]);
    }
    while (r + 1 < s.length && !set.has(s[r + 1])) {
      set.add(s[r + 1]);
      r++;
    }
    ans = Math.max(ans, r - i + 1);
  }
  return ans;
};
