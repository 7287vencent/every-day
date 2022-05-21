/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) {
    return false;
  }
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let c of s) {
    if (c in obj) {
      stack.push(c);
    } else if (obj[stack.pop()] !== c) {
      return false;
    }
  }
  return !stack.length;
};
