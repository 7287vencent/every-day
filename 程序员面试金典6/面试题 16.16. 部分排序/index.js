/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  let res = [-1, -1];
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = array.length - 1; i >= 0; i--) {
    // ? 从右往左，找到相对的最小值：比它左边的大，但是比右边的小
    if (array[i] <= min) {
      min = array[i];
    } else {
      res[0] = i;
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    // ? 从左往右，找到相对的最大值：比它左边的小，但是比右边的大
    if (array[i] >= max) {
      max = array[i];
    } else {
      res[1] = i;
    }
  }
  return res;
};

console.log(subSort([0]));
