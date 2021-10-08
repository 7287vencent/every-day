/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const countOnes = x => {
    let one = 0;
    while (x) {
      x &= x - 1;
      one++;
    }
    return one;
  };
  let res = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    res[i] = countOnes(i);
  }
  return res;
};
