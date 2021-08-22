/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = { 0: 1 };
  let sum = 0;
  let ans = 0;
  let model;
  for (let num of nums) {
    sum += num;
    model = ((sum % k) + k) % k;
    if (map[model]) {
      ans += map[model];
      map[model]++;
    } else {
      map[model] = 1;
    }
  }
  return ans;
};
