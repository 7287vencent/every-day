/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let ans = 0,
    mx = values[0] + 0;
  for (let i = 1; i < values.length; i++) {
    ans = Math.max(ans, mx + values[i] - i);
    mx = Math.max(mx, values[i] + i);
  }
  return ans;
};
