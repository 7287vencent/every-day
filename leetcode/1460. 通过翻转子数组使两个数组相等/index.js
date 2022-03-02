/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  let s1 = target.sort((a, b) => a - b).join("");
  let s2 = arr.sort((a, b) => a - b).join("");
  return s1 === s2;
};
