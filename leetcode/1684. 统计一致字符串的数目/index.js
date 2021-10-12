/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.filter(v => v.split("").every(k => allowed.includes(k))).length;
};
