/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  let small = Infinity;
  let mid = Infinity;
  for (let num of nums) {
    if (num <= small) {
      small = num;
    } else if (num <= mid) {
      mid = num;
    } else if (num > mid) {
      return true;
    }
  }
  return false;
};
