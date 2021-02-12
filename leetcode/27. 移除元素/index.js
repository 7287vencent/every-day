/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// todo 方法一
var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// todo 方法二
var removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length - 1;
  while (i <= n) {
    if (nums[i] === val) {
      while (i < n && nums[n] === val) {
        n--;
      }
      nums[i] = nums[n];
      n--;
    } else {
      i++;
    }
  }
  return n + 1;
};
