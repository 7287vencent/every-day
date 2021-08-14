/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  let res = [];
  for (let candie of candies) {
    res.push(candie + extraCandies >= max);
  }
  return res;
};
