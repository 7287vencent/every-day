/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let res = [];
  for (let c of s) {
    if (
      res.length &&
      res[res.length - 1] !== c &&
      res[res.length - 1].toLowerCase() === c.toLowerCase()
    ) {
      res.pop();
    } else {
      res.push(c);
    }
  }
  return res.join("");
};
