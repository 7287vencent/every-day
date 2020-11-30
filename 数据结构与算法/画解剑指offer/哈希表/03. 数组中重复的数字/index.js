/**
 * @param {number[]} nums 哈希解法
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const numsSet = new Set();
  for (const num of nums) {
    if (numsSet.has(num)) {
      return num;
    } else {
      numsSet.add(num);
    }
  }
  return -1;
};

/**
 * @param {number[]} nums 原地哈希
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] != i) {
      if (nums[i] == nums[nums[i]]) {
        return nums[i];
      }
      const temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
};
