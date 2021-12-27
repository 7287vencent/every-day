/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  const getAnswer = (left, right) => {
    if (left > right) {
      return -1;
    }
    let mid = ((left + right) / 2) >> 0;
    let leftAns = getAnswer(left, mid - 1);
    if (leftAns !== -1) {
      return leftAns;
    } else if (nums[mid] === mid) {
      return mid;
    }
    return getAnswer(mid + 1, right);
  };
  return getAnswer(0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  const arr = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === i) {
      arr.push(nums[i]);
    }
  }
  return arr.length > 0
    ? arr.sort(function (a, b) {
        return a - b;
      })[0]
    : -1;
};
