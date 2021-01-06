/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  let start = s.length - 1;
  let end = start;
  let res = "";
  while (start >= 0) {
    // 获取单词
    while (start >= 0 && s[start] !== " ") {
      start--;
    }
    res += s.substring(start + 1, end + 1) + " ";
    // 去除空格
    while (start >= 0 && s[start] === " ") {
      start--;
    }
    end = start;
  }
  return res.trim();
};
