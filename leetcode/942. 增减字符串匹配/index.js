/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let n = s.length;
  let ans = Array(n);
  let l = 0;
  let r = n;
  for (let i = 0; i <= n; i++) {
    if (s[i] == "I") {
      ans[i] = l++;
    } else {
      ans[i] = r--;
    }
  }
  return ans;
};
