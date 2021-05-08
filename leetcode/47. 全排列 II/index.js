/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let vis = Array(nums.length).fill(false);
  const generate = temp => {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      temp.push(nums[i]);
      vis[i] = true;
      generate(temp);
      vis[i] = false;
      temp.pop();
    }
  };
  nums.sort((a, b) => a - b);
  generate([]);
  return res;
};
