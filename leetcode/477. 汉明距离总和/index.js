/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let ans = 0,
    n = nums.length;
  for (let i = 0; i < 30; i++) {
    let c = 0;
    // ? 统计nums中的数, 第 i 位有多少个是1
    for (let val of nums) {
      c += (val >> i) & 1;
    }
    ans += c * (n - c);
  }
  return ans;
};
