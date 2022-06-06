/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let maxlen = 0;
  let count = 0;
  let map = new Map();
  map.set(count, -1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count--;
    }
    if (map.has(count)) {
      let pre = map.get(count);
      maxlen = Math.max(maxlen, i - pre);
    } else {
      map.set(count, i);
    }
  }
  return maxlen;
};
