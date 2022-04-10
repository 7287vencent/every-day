/**
 * @param {string} word
 * @return {number}
 */
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  // 储存遍历时出现过的状态，总共有 1 << 10 种
  const cnt = new Array(1 << 10).fill(0);
  // 先写一个字符到数字的映射函数，比如a->0, b->1
  const map = c => c.charCodeAt(0) - "a".charCodeAt(0);
  // 一定要初始化，字母都出现0次时，看作都是偶数的情况
  cnt[0] = 1;
  // 记录总数
  let ans = 0;

  // 注意，x维护的是前缀和，初始状态时全是偶数，所以为0
  let x = 0;
  for (const w of word) {
    // 更新当前位置的前缀和
    x ^= 1 << map(w);
    // 全是偶数的情况
    ans += cnt[0 ^ x];
    // 某位为奇数的情况
    for (let j = 0; j < 10; ++j) {
      ans += cnt[x ^ (1 << j)];
    }
    // x的状态又多了一个，就是遍历到当前时的前缀和，储存下来，后面会用
    cnt[x]++;
  }
  return ans;
};
