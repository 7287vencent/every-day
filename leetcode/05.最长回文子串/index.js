
/**
 * @param {string} s
 * @return {string}
 */

// 这种思路就是 manacher
// S	#	a	#	b	#	b	#	a	#
// P	1	2	1	2	5	2	1	2	1
// https://www.felix021.com/blog/read.php?2040
// p[i] 代表以 s[i] 为中心 的 最长回文字串的长度 
var longestPalindrome = function (s) {
  let length = s.length;
  if (length < 2) {
    return s;
  }
  let str = generateNewString(s, '#');
  let sLen = 2 * length + 1;

  let p = new Array(sLen).fill(0);

  let maxRight = 0;
  let center = 0;
  let maxLen = 1;
  let start = 0;
  for (let i = 0; i < sLen; i++) {
    if (i < maxRight) {
      let mirror = 2 * center - i; // mirror 是 i 关于 center 的 对称点
      p[i] = Math.min(maxRight - i, p[mirror]);
    }

    let left = i - (1 + p[i]);
    let right = i + (1 + p[i]);
    // 
    while (left >= 0 && right < sLen && str[left] === str[right]) {
      p[i]++;
      left--;
      right++;
    }

    if (i + p[i] > maxRight) {
      maxRight = i + p[i];
      center = i;
    }

    if (p[i] > maxLen) {
      maxLen = p[i];
      start = Math.floor((i - maxLen) / 2);
    }
  }

  return s.substring(start, start + maxLen)
};

var generateNewString = function (str, divide) {
  let length = str.length;
  if (length == 0) {
    return "";
  }
  if (str.indexOf(divide) != -1) {
    return "";
  }
  let res = "";
  for (let i = 0; i < length; i++) {
    res += divide;
    res += str[i];
  }
  res += divide;
  return res;
}