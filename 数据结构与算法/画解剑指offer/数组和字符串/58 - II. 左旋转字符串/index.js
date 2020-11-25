/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  return s.substring(n) + s.substring(0, n)
};

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const mp = s.slice(0, n);
  let res = s.replace(mp, '');
  res += mp;
  return res;
};

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let res = "";
  let len = s.length;
  for (let i = n; i < len; i++) {
    res += s[i];
  }
  for (let i = 0; i < n; i++) {
    res += s[i];
  }
  return res;
};