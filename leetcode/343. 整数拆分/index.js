/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    let cur = 0;
    for (let j = 1; j < i; j++) {
      cur = Math.max(cur, j * (i - j), j * dp[i - j]);
    }
    dp[i] = cur;
  }
  return dp[n];
};
