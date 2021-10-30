/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let f1 = 0; // ? i 天后交易完成，没有票
  let f2 = -prices[0]; // i 天后交易完成，有票
  for (let i = 1; i < prices.length; i++) {
    // i - 1 天没有票的最大利润
    // i - 1 天有票，但是 i 天卖出去
    let newf1 = Math.max(f1, f2 + prices[i] - fee);
    // i - 1 天有票
    // i - 1 天没有票，但是今天买了票
    let newf2 = Math.max(f2, f1 - prices[i]);
    f1 = newf1;
    f2 = newf2;
  }
  return Math.max(f1, f2);
};
