/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }
  let f1 = -prices[0]; // ? i 天后有票的最大收益, 买入
  let f2 = 0; // ? i 天后没有票，处于冷冻期的最大收益,卖出
  let f3 = 0; // ? i 天后没有票，且不处于冷冻期,也就是 i 天为冷冻期
  for (let i = 1; i < prices.length; i++) {
    // ? i - 1天后有票，但是今天不买 f1
    // ? 今天买入
    let newf1 = Math.max(f1, f3 - prices[i]);
    // ? 今天卖出票 = 昨天有票 + 今天买的钱
    let newf2 = f1 + prices[i];
    // ? 昨天为冷冻期，f3 或 昨天卖了票,f2
    let newf3 = Math.max(f2, f3);
    f1 = newf1;
    f2 = newf2;
    f3 = newf3;
  }
  return Math.max(f2, f3);
};
