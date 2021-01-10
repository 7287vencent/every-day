/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let queue = [];
  let res = [];
  for (let left = 1 - k, right = 0; right < nums.length; left++, right++) {
    if (left >= 0 && queue[0] === nums[left - 1]) {
      queue.shift();
    }
    while (queue.length && queue[queue.length - 1] < nums[right]) {
      queue.pop();
    }
    queue.push(nums[right]);
    if (left >= 0) {
      res.push(queue[0]);
    }
  }
  return res;
};
