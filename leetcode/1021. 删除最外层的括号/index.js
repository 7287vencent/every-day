/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let count = 0,
    ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" && count++ > 0) ans += "(";
    if (s[i] === ")" && count-- > 1) ans += ")";
  }
  return ans;
};
