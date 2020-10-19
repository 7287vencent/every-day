/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let count = 1
  let str = ''
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) {
      count++
    } else {
      str += S[i] + count
      count = 1
    }
  }
  return S.length > str.length ? str : S
};