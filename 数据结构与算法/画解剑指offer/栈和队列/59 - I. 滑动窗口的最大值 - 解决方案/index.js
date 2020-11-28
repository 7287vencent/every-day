/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0 || k === 0) {
    return []
  }
  let queue = []
  let res = []
  for (let left = 1 - k, right = 0; right < nums.length; left++, right++) {
    // 窗口已经走过 队列头部的数
    if (left > 0 && nums[left - 1] === queue[0]) {
      queue.shift()
    }
    // 维护 queue 为 单调 递减队列
    while (queue.length !== 0 && queue[queue.length - 1] < nums[right]) {
      queue.pop()
    }
    queue.push(nums[right])
    // 对头肯定是最大的
    if (left >= 0) {
      res.push(queue[0])
    }
  }
  return res
};