/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const fn = (temp, start) => {
    res.push([...temp]);
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      fn(temp, i + 1);
      temp.pop();
    }
  };
  fn([], 0);
  return res;
};

subsets([1, 2, 3]);
