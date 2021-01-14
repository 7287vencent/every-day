/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // todo 最差的算法
  // if (n === 1 || n === 0) {
  //   return n
  // }
  // return fib(n - 1) + fib(n - 2)
  // todo 动态规划
  if (n < 2) {
    return n;
  }
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;

  // todo 使用递推
  // let cache = [];
  // for (let i = 0; i <= n; i++) {
  //   if (i === 1 || i === 0) {
  //     cache[i] = i;
  //   } else {
  //     cache[i] = cache[i - 1] + cache[i - 2];
  //   }
  // }
  // return cache[n];
};
