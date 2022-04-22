/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      res = Math.max(res, height[left] * (right - left));
      left++;
    } else {
      res = Math.max(res, height[right] * (right - left));
      right--;
    }
  }
  return res;
};
