/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let min = Number.MIN_SAFE_INTEGER / 2;
  let max = Number.MAX_SAFE_INTEGER / 2;
  let n = s.length;
  let arr = [];
  let pre = min;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) pre = i;
    arr[i] = i - pre;
  }
  pre = max;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) pre = i;
    arr[i] = Math.min(arr[i], pre - i);
  }
  return arr;
};
