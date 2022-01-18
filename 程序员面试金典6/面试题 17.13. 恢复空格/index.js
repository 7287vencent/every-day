/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
// todo 动态规划
var respace = function (dictionary, sentence) {
  let n = sentence.length;
  let dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let idx = 0; idx < i; idx++) {
      if (dictionary.includes(sentence.substring(idx, i))) {
        dp[i] = Math.min(dp[i], dp[idx]);
      }
    }
  }
  return dp[n];
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
// todo 优化的动态规划
var respace = function (dictionary, sentence) {
  let arr = [];
  for (let i = 0, length = dictionary.length; i < length; i++) {
    sentence.includes(dictionary[i]) && arr.push(dictionary[i]);
  }
  arr.sort((a, b) => b.length - a.length);
  arr = [...new Set(arr)];

  const length = sentence.length;
  const dp = new Array(length + 1).fill(0);
  for (let i = 1; i <= length; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let word of arr) {
      const len = word.length;
      if (length >= len && sentence.slice(i - len, i) === word) {
        dp[i] = Math.min(dp[i], dp[i - len]);
      }
    }
  }
  return dp[length];
};
