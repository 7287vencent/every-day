/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let L = 10;
  let res = new Set();
  let hash = new Set();
  for (let i = 0; i < s.length - L + 1; i++) {
    let str = s.substr(i, L);
    if (hash.has(str)) {
      res.add(str);
      continue;
    }
    hash.add(str);
  }
  return [...res];
};
