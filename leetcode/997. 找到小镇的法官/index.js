/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let accept = Array(n).fill(0);
  let attack = Array(n).fill(0);
  for (let [a, b] of trust) {
    accept[a - 1]++;
    attack[b - 1]++;
  }
  for (let i = 0; i < n; i++) {
    if (accept[i] === 0 && attack[i] === n - 1) {
      return i + 1;
    }
  }
  return -1;
};
