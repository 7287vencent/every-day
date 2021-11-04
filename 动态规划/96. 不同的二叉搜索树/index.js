/**
 * @param {number} n
 * @return {number}
 */
// todo 动态规划
var numTrees = function (n) {
  let res = Array(n + 1).fill(0);
  res[0] = 1;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res[i] += res[j - 1] * res[i - j];
    }
  }
  return res[n];
};

// todo 数学  卡塔兰数 方法
var numTrees = function (n) {
  let C = 1;
  for (let i = 0; i < n; ++i) {
    C = (C * 2 * (2 * i + 1)) / (i + 2);
  }
  return C;
};
