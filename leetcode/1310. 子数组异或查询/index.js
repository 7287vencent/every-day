/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let m = arr.length;
  let xor = Array(m + 1).fill(0);
  for (let i = 0; i < m; i++) {
    xor[i + 1] = xor[i] ^ arr[i];
  }
  let res = [];
  let item = undefined;
  for (let i = 0, n = queries.length; i < n; i++) {
    item = xor[queries[i][0]] ^ xor[queries[i][1] + 1];
    res.push(item);
  }
  return res;
};
