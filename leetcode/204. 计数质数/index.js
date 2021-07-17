/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPromise = Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPromise[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        isPromise[j] = 0;
      }
    }
  }
  return ans;
};
