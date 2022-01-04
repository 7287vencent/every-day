/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (!k) return [];
  let diff = longer - shorter;
  let length = k * shorter;
  let res = [length];
  if (diff === 0) {
    return res;
  }
  for (let i = 1; i <= k; i++) {
    length += diff;
    res.push(length);
  }
  return res;
};
