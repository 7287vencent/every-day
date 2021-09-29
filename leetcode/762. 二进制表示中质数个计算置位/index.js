/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19];
  let res = 0;
  for (let i = left; i <= right; i++) {
    let temp = i;
    let sum = 0;
    // ? 计算 1 的个数
    while (temp) {
      temp &= temp - 1;
      sum++;
    }
    if (primes.includes(sum)) {
      res++;
    }
  }
  return res;
};
