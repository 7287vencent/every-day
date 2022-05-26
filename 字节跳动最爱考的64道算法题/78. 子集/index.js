/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  const backtrack = (start, temp) => {
    res.push([...temp]);
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(i + 1, temp);
      temp.pop();
    }
  };
  backtrack(0, []);
  return res;
};
