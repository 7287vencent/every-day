/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) {
    return [];
  }
  let res = [];
  const dfs = (str, left, right, res) => {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    if (left > right) {
      return;
    }
    if (left > 0) {
      dfs(str + "(", left - 1, right, res);
    }
    if (right > 0) {
      dfs(str + ")", left, right - 1, res);
    }
  };
  dfs("", n, n, res);
  return res;
};
