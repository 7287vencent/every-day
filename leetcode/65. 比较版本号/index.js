/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let n = version1.length;
  let m = version2.length;
  let i = 0,
    j = 0;
  while (i < n || j < m) {
    let x = 0;
    for (; i < n && version1[i] !== "."; i++) {
      x = x * 10 + version1[i].charCodeAt() - "0".charCodeAt();
    }
    i++;
    let y = 0;
    for (; j < m && version2[j] !== "."; j++) {
      y = y * 10 + version2[j].charCodeAt() - "0".charCodeAt();
    }
    j++;
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};
