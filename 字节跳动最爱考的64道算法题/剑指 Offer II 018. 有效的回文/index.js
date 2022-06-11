/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let str = s.split("").reverse().join("");
  return str === s;
};
