/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let n = arr.length;
  let ans = Array(n);
  ans[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i + 1], arr[i + 1]);
  }
  return ans;
};
