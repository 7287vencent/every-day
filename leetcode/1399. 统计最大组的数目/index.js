/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let map = {};
  let max = 0;
  for (let i = 1; i <= n; i++) {
    // ? 计算数位和
    let k = 0,
      j = i;
    while (j !== 0) {
      k += j % 10;
      j = (j / 10) >> 0;
    }
    if (!map[k]) {
      map[k] = 0;
    }
    map[k]++;
    max = Math.max(map[k], max);
  }
  // ? 统计出现次数为 max 的结果，就是所求
  let count = 0;
  for (let v in map) {
    if (map[v] === max) {
      count++;
    }
  }
  return count;
};
