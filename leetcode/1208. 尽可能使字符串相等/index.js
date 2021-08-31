/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let n = s.length;
  let diff = Array(n);
  for (let i = 0; i < n; i++) {
    diff[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
  }
  let maxLen = 0;
  let start = 0;
  let end = 0;
  let sum = 0;
  while (end < n) {
    sum += diff[end];
    while (sum > maxCost) {
      sum -= diff[start];
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};
