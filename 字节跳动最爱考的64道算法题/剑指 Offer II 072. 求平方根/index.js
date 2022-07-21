/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0,
    r = x,
    ans = -1;
  while (l <= r) {
    let mid = ((l + r) / 2) >> 0;
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};
