/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n <= 0) return [];
  let res = [];
  const dfs = (path, left, right) => {
    if (left > n || right > left) return;
    if (path.length === n * 2) {
      res.push(path);
      return;
    }
    dfs(path + "(", left + 1, right);
    dfs(path + ")", left, right + 1);
  };
  dfs("", 0, 0);
  return res;
};
