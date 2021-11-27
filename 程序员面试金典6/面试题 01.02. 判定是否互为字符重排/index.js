/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length != s2.length) return false;
  if (s1 === s2) return true;

  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  return s1 === s2;
};
