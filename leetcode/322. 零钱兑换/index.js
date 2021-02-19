/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
      return 0
  }
  let dp = Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0 // ? 初始化，不能少
  for (let i = 0; i < dp.length;i++) {
      for (let j = 0; j < coins.length; j++) {
          if (coins[j] <= i) {
              dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
          }
      }
  }
  return dp[amount] > amount ? -1 : dp[amount]
};