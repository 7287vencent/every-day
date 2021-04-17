/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let hash = new Set(banned);
  let arr = paragraph
    .toLowerCase()
    .match(/[a-z]+/g)
    .filter(str => !hash.has(str));
  let obj = {};
  let res = "";
  let max = 0;
  for (let str of arr) {
    obj[str] = (obj[str] || 0) + 1;
    if (obj[str] > max) {
      max = obj[str];
      res = str;
    }
  }
  return res;
};
