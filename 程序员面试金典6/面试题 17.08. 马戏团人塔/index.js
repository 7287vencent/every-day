/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function (height, weight) {
  const data = [];
  const dp = [];
  for (let i = 0; i < height.length; i++) {
    const item = {
      height: height[i],
      weight: weight[i],
    };
    data.push(item);
  }
  data.sort(function (a, b) {
    if (a.height === b.height) {
      return b.weight - a.weight;
    }
    return a.height - b.height;
  });
  // 利用二分法获取weight的最长子串的值就是结果
  let res = 0;
  for (let index in data) {
    index = Number(index);
    let w = data[index].weight;
    let i = 0;
    let j = res;
    while (i < j) {
      const m = parseInt((i + j) / 2);
      if (dp[m] < w) {
        i = m + 1;
      } else {
        j = m;
      }
    }
    dp[i] = w;
    if (j === res) res++;
  }
  return res;
};
