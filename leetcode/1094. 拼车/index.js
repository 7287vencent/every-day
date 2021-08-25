/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let max = 1001;
  let diff = Array(max).fill(0);
  for (let trip of trips) {
    diff[trip[1]] += trip[0];
    diff[trip[2]] -= trip[0];
  }
  let sum = 0;
  for (let i = 0; i < max; i++) {
    sum += diff[i];
    if (sum > capacity) {
      return false;
    }
  }
  return true;
};
