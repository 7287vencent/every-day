/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let ans = [];
  let sum = 0;
  for (let i = 1; i < n; ++i) {
    ans.push(i);
    sum += i;
  }
  ans.push(-sum);
  return ans;
};
