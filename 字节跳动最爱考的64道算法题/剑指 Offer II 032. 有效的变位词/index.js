/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    s.length == t.length &&
    s !== t &&
    [...s].sort().join("") === [...t].sort().join("")
  );
};
