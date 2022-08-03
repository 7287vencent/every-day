/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const t = [];
  const ans = [];
  const dfs = cur => {
    if (cur === nums.length) {
      ans.push(t.slice());
      return;
    }
    t.push(nums[cur]);
    dfs(cur + 1, nums);
    t.pop(t.length - 1);
    dfs(cur + 1, nums);
  };
  dfs(0, nums);
  return ans;
};
