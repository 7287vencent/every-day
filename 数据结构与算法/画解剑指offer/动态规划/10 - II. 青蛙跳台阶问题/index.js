/**
 * @param {number} n
 * @return {number}
 */
// todo 方法一：动态规划
var numWays = function (n) {
  let n1 = 1, n2 = 1, sum
  for (let i = 0; i < n; i++) {
    sum = (n1 + n2) % 1000000007
    n1 = n2
    n2 = sum
  }
  return n1
};

// todo 方法二 动态规划 - 递归方式
var numWays = function (n) {
  let obj = [1, 1]
  function f (n) {
    if (obj[n]) {
      return obj[n]
    }
    obj[n] = f(n - 1) + f(n - 2)
    return obj[n] % 1000000007
  }
  return f(n)
};


// todo 方法三
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let steps = [];
  steps[0] = 1;
  steps[1] = 1;
  steps[2] = 2;

  for (let i = 3; i <= n; i++) {
    steps[i] = (steps[i - 1] + steps[i - 2]) % 1000000007;
  }

  return steps[n];
};