/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  const coins = [25, 10, 5, 1];
  const mod = 1000000007;
  let f = Array(n + 1).fill(0);
  f[0] = 1;
  for (let c = 0; c < 4; c++) {
    let coin = coins[c];
    for (let i = coin; i <= n; i++) {
      f[i] = (f[i] + f[i - coin]) % mod;
    }
  }
  return f[n];
};
