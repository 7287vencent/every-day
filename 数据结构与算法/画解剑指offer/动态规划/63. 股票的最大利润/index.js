/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minCost = Infinity
  let maxBenefit = 0
  for (let price of prices) {
    minCost = Math.min(minCost, price)
    maxBenefit = Math.max(maxBenefit, price - minCost)
  }
  return maxBenefit
};
