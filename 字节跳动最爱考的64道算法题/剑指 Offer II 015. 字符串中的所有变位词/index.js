/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const slen = s.length,
    plen = p.length;
  if (slen < p.length) {
    return [];
  }
  let sarr = Array(26).fill(0);
  let parr = Array(26).fill(0);
  for (let i = 0; i < plen; i++) {
    ++sarr[s[i].charCodeAt() - "a".charCodeAt()];
    ++parr[p[i].charCodeAt() - "a".charCodeAt()];
  }
  let ans = [];
  if (sarr.toString() === parr.toString()) {
    ans.push(0);
  }
  for (let i = 0; i < slen - plen; i++) {
    --sarr[s[i].charCodeAt() - "a".charCodeAt()];
    ++sarr[s[i + plen].charCodeAt() - "a".charCodeAt()];
    if (sarr.toString() === parr.toString()) {
      ans.push(i + 1);
    }
  }
  return ans;
};
