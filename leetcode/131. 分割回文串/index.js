/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const dfs = i => {
    if (i === n) {
      ret.push(ans.slice());
    }
    for (let j = i; j < n; j++) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  };
  const n = s.length;
  let ret = [];
  let ans = [];
  let f = Array(n)
    .fill(0)
    .map(() => Array(n).fill(true));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
    }
  }
  console.log(f);
  dfs(0);
  return ret;
};
