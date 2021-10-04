/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let arr = Array(encoded.length + 1).fill(0);
  arr[0] = first;
  for (let i = 1; i <= encoded.length; i++) {
    arr[i] = arr[i - 1] ^ encoded[i - 1];
  }
  return arr;
};
