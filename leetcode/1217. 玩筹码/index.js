/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let odd = 0;
  let even = 0;
  for (let num of position) {
    if (num & 1) even++;
    else odd++;
  }
  return Math.min(odd, even);
};
