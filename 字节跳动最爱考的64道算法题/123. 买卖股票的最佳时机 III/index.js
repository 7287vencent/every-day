/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let buy1 = -prices[0],
    buy2 = -prices[0];
  let sell1 = 0,
    sell2 = 0;
  for (let i = 1; i < n; i++) {
    // ? 买一笔操作
    buy1 = Math.max(buy1, -prices[i]);
    // ? 买了一笔，又卖一笔，其实就是卖出去, 完成一笔交易
    sell1 = Math.max(sell1, buy1 + prices[i]);
    // ? 然后卖第二支股票
    buy2 = Math.max(buy2, sell1 - prices[i]);
    // ? 卖掉：完成两笔交易
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};
