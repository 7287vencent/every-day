/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length;
  const wordDir = new Set(wordDict);
  const dp = Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDir.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
