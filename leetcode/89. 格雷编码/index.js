/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let res = [];
  let pos = 1 << n;
  for (let i = 0; i < pos; i++) {
    res.push(i ^ (i >> 1));
  }
  return res;
};
