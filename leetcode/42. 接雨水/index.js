/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 动态规划
  if (height.length === 0) {
    return 0;
  }
  let n = height.length;
  let max_left = [];
  max_left[0] = height[0];
  let max_right = [];
  max_right[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    max_left[i] = Math.max(max_left[i - 1], height[i]);
  }
  for (let i = n - 2; i >= 0; i--) {
    max_right[i] = Math.max(max_right[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    let min = Math.min(max_left[i], max_right[i]);
    if (min > height[i]) {
      ans += min - height[i];
    }
  }
  return ans;
};
