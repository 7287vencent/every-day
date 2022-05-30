/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  const dfs = (temp, target, start) => {
    if (target === 0) {
      res.push([...temp]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (target < candidates[i]) {
        break;
      }
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      temp.push(candidates[i]);
      dfs(temp, target - candidates[i], i + 1);
      temp.pop();
    }
  };
  candidates.sort((a, b) => a - b);
  dfs([], target, 0);
  return res;
};
