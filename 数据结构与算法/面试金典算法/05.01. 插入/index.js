/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  let a = N.toString(2).split('').reverse()
  let b = M.toString(2).split('').reverse()
  for (let t = i; t <= j; t++) {
    a[t] = b[t - i] ? b[t - i] : '0'
  }
  return parseInt(a.reverse().join(''), 2)
};