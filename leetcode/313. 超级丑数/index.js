/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let dp = Array(n + 1).fill(0);
  let m = primes.length;
  // ? 记录指针
  let pointers = Array(m).fill(0); // ? 每次指针的结果
  let nums = Array(m).fill(1);
  for (let i = 1; i <= n; i++) {
    let min = Math.min(...nums);
    // ? 取出 number 中的最小的
    dp[i] = min;
    // ? 下个数，肯定是 dp 中的所有数 * preimes中的所有数，结果的最小值
    // ? 又因为 dp 肯定是 递增的, 所以这里可以减少 数量
    for (let j = 0; j < m; j++) {
      if (nums[j] === min) {
        // ? primes 中的 第 j 个数，使用的次数
        pointers[j]++;
        nums[j] = dp[pointers[j]] * primes[j];
      }
    }
  }
  return dp[n];
};
