/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  const fn = (temp, begin) => {
    res.push([...temp]);
    for (let i = begin; i < nums.length; i++) {
      if (i > begin && nums[i] === nums[i - 1]) {
        continue;
      }
      temp.push(nums[i]);
      fn(temp, i + 1);
      temp.pop();
    }
  };
  nums.sort((a, b) => a - b);
  fn([], 0);
  return res;
};
