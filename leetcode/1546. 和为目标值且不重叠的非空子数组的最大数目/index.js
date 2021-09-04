/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  let n = nums.length;
  let i = 0;
  let ans = 0;
  while (i < n) {
    let map = [0];
    let sum = 0;
    while (i < n) {
      sum += nums[i];
      if (map.includes(sum - target)) {
        ans++;
        break;
      } else {
        map.push(sum);
        i++;
      }
    }
    i++;
  }
  return ans;
};
