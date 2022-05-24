/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  const fn = temp => {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue;
      }
      temp.push(nums[i]);
      fn(temp);
      temp.pop();
    }
  };
  fn([]);
  return res;
};
