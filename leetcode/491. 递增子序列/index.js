/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let temp = [];
  let ans = [];
  const dfs = (cur, last) => {
    if (cur === nums.length) {
      if (temp.length >= 2) {
        ans.push([...temp]);
      }
      return;
    }
    // ? 选当前元素
    if (nums[cur] >= last) {
      temp.push(nums[cur]);
      dfs(cur + 1, nums[cur]);
      temp.pop();
    }
    // ? 不选当前元素
    if (nums[cur] !== last) {
      dfs(cur + 1, last);
    }
  };
  dfs(0, -1000);
  return ans;
};
