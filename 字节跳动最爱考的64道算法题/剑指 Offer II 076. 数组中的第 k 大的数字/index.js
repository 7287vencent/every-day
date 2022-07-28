/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSelect = (left, right, index) => {
    const q = randomPartition(left, right);
    if (q === index) {
      return nums[q];
    } else {
      return q < index
        ? quickSelect(q + 1, right, index)
        : quickSelect(left, q - 1, index);
    }
  };

  const randomPartition = (left, right) => {
    const i = Math.floor(Math.random() * (right - left + 1)) + left;
    swap(i, right);
    let cur = left;
    for (let j = left; j < right; j++) {
      if (nums[j] > nums[right]) {
        swap(cur++, j);
      }
    }
    swap(cur, right);
    return cur;
  };

  const swap = (index1, index2) => {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  };
  return quickSelect(0, nums.length - 1, k - 1);
};
