/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let fn = (list, temp, nums) => {
    if (temp.length === nums.length) {
      return list.push([...temp]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue;
      }
      temp.push(nums[i]);
      fn(list, temp, nums);
      temp.pop();
    }
  };
  let list = [];
  fn(list, [], nums);
  return list;
};
