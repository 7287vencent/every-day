/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  let fn = (temp, target, start) => {
    if (target === 0) {
      res.push([...temp]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (target < candidates[i]) {
        break;
      }
      if (i > start && candidates[i] == candidates[i - 1]) {
        continue;
      }
      temp.push(candidates[i]);
      // 因为元素不可以重复使用，这里递归传递下去的是 i + 1
      fn(temp, target - candidates[i], i + 1);
      temp.pop();
    }
  };
  candidates.sort((a, b) => a - b);
  fn([], target, 0);
  return res;
};
