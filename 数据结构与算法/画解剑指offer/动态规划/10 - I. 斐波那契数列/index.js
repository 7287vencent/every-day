/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let num1 = 0
  let num2 = 1
  let sum
  for (let i = 0; i < n; i++) {
    sum = (num1 + num2) % 1000000007
    num1 = num2 // ? 这个 num1 是精髓, 获取的值 就是 f(n)
    num2 = sum
  }
  return num1
};

console.log(fib(5))


/**
 * @param {number} n
 * @return {number}
 */
// todo 优秀的 suanf 
var fib = function (n) {
  let dp = [0, 1]
  function f (n) {
    if (dp[n] != undefined) {
      return dp[n];
    }
    dp[n] = f(n - 1) + f(n - 2);
    return dp[n] % 1000000007;
  }
  return f(n);
};