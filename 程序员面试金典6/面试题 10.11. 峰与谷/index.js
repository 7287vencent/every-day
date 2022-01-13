/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// todo 排序
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [...nums];
  let i = 0,
    left = 0,
    right = nums.length - 1,
    flag = 1;
  while (i < nums.length) {
    nums[i++] = ans[flag++ % 2 === 0 ? left++ : right--];
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// todo 不排序
var wiggleSort = function (nums) {
  let n = nums.length;
  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      if (nums[i] < nums[i + 1]) {
        //交换位置让偶数位为峰
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    } else {
      if (nums[i] > nums[i + 1]) {
        //让奇数位为谷
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }
  return nums;
};
