/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  // ? 计数
  let numSize = 0;
  let charSize = 0;
  let numStr = "";
  let charStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      numSize++;
      numStr += s[i];
    } else {
      charSize++;
      charStr += s[i];
    }
  }
  if (Math.abs(numSize - charSize) >= 2) {
    return "";
  }
  // ? 组合成结果，长的方第一位
  let nl = numStr.length,
    i = 0;
  let cl = charStr.length,
    j = 0;
  let res = "";
  if (nl > cl) {
    res += numStr[i++];
  } else if (nl < cl) {
    res += charStr[j++];
  }
  // ? 循环添加
  while (i < nl || j < cl) {
    if (i > j) {
      res += charStr[j++];
      res += numStr[i++];
    } else {
      res += numStr[i++];
      res += charStr[j++];
    }
  }
  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  if (s.length == 1) return s;
  let str = s.replace(/[0-9]/g, "");
  let num = s.replace(/[a-z]/g, "");
  if (Math.abs(str.length - num.length) > 1) return "";
  else {
    let res = "";
    if (str.length >= num.length) {
      for (let i in str) res = res.concat(str[i], num[i] ? num[i] : "");
    } else {
      for (let i in num) res = res.concat(num[i], str[i] ? str[i] : "");
    }
    return res;
  }
};
