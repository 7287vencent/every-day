/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  const commonStr = (str1, str2) => {
    let len = Math.min(str1.length, str2.length);
    let index = 0;
    while (index < len && str1[index] === str2[index]) {
      index++;
    }
    return str1.substring(0, index);
  };
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = commonStr(prefix, strs[i]);
    if (prefix.length === 0) {
      break;
    }
  }
  return prefix;
};
