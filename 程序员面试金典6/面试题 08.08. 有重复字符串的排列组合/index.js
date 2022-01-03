/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  let temp = Array(S.length).fill(false);
  let res = [];
  let dfs = str => {
    if (str.length === S.length) {
      res.push(str);
      return;
    }
    for (let i = 0; i < S.length; i++) {
      if (!temp[i]) {
        temp[i] = true;
        dfs(str + S[i]);
        temp[i] = false;
      }
    }
  };
  dfs("");
  return [...new Set(res)];
};
