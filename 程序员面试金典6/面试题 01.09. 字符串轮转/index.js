/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  return s1.length === s2.length && (s2 + s2).includes(s1);
};
