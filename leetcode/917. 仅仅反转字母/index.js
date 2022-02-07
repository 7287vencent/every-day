/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  var arr = s.match(/[a-zA-Z]/g);
  if (arr === null) return s;
  return s.replace(/[a-zA-Z]/g, () => arr.pop());
};
