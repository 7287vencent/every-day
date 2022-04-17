/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === null || s.length < 1) {
    return "";
  }
  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let len = expandAroundCenter(s, i, i); // ? 奇数
    let len2 = expandAroundCenter(s, i, i + 1); // ? 偶数
    let max = Math.max(len, len2);
    if (max > end - start) {
      start = i - (((max - 1) / 2) >> 0);
      end = i + ((max / 2) >> 0);
    }
  }
  return s.substring(start, end + 1);
};
