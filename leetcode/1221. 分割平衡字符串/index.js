/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let ans = 0;
  let d = 0;
  for (let c of s) {
    c === "L" ? d++ : d--;
    if (d === 0) {
      ans++;
    }
  }
  return ans;
};
