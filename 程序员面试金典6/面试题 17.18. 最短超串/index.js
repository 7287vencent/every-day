/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
var shortestSeq = function (big, small) {
  let n = big.length;
  let need = {};
  let diff = 0;
  let res = [];
  let minlen = n;
  for (let e of small) {
    if (!need[e]) {
      need[e] = 0;
    }
    need[e]++;
    diff++;
  }
  let l = 0,
    r = 0;
  while (r < n) {
    if (big[r] in need && --need[big[r]] >= 0) --diff;
    while (diff === 0) {
      if (r - l < minlen) {
        minlen = r - l;
        res = [l, r];
      }
      if (big[l] in need && ++need[big[l]] > 0) {
        ++diff;
      }
      l++;
    }
    r++;
  }
  return res;
};

const big = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7];
const small = [1, 5, 9];
shortestSeq(big, small);
