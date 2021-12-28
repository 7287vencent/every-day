/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  let res = [];
  let n = S.length;
  let book = Array(n).fill(0);
  const dfs = temp => {
    if (temp.length === n) {
      let str = [...temp].join("");
      res.push(str);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (book[i] === 0) {
        temp.push(S[i]);
        book[i] = 1;
        dfs(temp);
        temp.pop();
        book[i] = 0;
      }
    }
  };
  dfs([]);
  return res;
};
