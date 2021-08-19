/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    if (ans < sum) {
      ans = sum;
    }
  }
  return ans;
};
