var lastStoneWeightII = function (stones) {
  const sSum = stones.reduce((pre, cur) => pre + cur);
  const n = stones.length;
  const volume = Math.floor(sSum / 2);

  const dp = Array(volume + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const tmp = stones[i];
    for (let j = volume; j >= tmp; j--) {
      dp[j] = Math.max(dp[j], dp[j - tmp] + tmp);
    }
  }

  return sSum - dp[volume] * 2;
};
