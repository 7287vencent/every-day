/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const backTrans = (list, temp, nums, start) => {
    list.push([...temp]);
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backTrans(list, temp, nums, i + 1);
      temp.pop();
    }
  };
  let list = [];
  backTrans(list, [], nums, 0);
  return list;
};
