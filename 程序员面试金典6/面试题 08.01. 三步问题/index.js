/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  if (n < 3) {
    return n;
  }
  let mod = 1000000007;
  let a = 1; // 1
  let b = 2; // 2
  let c = 4; // 3
  let s = 4; // 3
  for (let i = 4; i <= n; i++) {
    s = (a + b + c) % mod;
    a = b;
    b = c;
    c = s;
  }
  return s;
};
