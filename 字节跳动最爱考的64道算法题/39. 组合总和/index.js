/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  const dfs = (temp, target, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      res.push([...temp]);
      return;
    }
    // ? 当前值不选
    dfs(temp, target, idx + 1);
    // ? 当前值璇
    if (target - candidates[idx] >= 0) {
      dfs([...temp, candidates[idx]], target - candidates[idx], idx);
    }
  };
  dfs([], target, 0);
  return res;
};
