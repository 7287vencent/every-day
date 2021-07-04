/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }
  let ans = 0;
  for (let c in map) {
    let v = map[c];
    // ? 所有的偶数全部加上
    ans += ((v / 2) >> 0) * 2;
    // ? 加上一个基数的
    if (v % 2 === 1 && ans % 2 === 0) {
      ans += 1;
    }
  }
  return ans;
};
