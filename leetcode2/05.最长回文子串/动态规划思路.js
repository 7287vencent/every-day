var longestPalindrome = function (s) {
  let len = s.length;
  let result;
  let i, j, L;
  let dp = Array(len).fill(0).map(x => Array(len).fill(0));
  //console.log(dp);
  if (len <= 1) {
    return s
  }
  // 只有一个字符的情况是回文
  for (i = 0; i < len; i++) {
    dp[i][i] = 1
    result = s[i]
  }

  // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
  // i     j
  // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
  for (L = 2; L <= len; L++) {
    // 从0开始
    for (i = 0; i <= len - L; i++) {
      j = i + L - 1;
      if (L == 2 && s[i] == s[j]) {
        dp[i][j] = 1;
        result = s.slice(i, i + L);
      } else if (s[i] == s[j] && dp[i + 1][j - 1] == 1) {
        dp[i][j] = 1
        result = s.slice(i, i + L);
      }

    }
  }
  //console.log(result);
  return result;
}
// https://blog.csdn.net/qq_31126175/article/details/84848290