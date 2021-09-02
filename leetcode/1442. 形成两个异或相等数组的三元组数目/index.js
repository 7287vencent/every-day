/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let cnt = new Map();
  let total = new Map();
  let ans = 0;
  let s = 0;
  for (let [k, val] of arr.entries()) {
    const t = s ^ val;
    if (cnt.has(t)) {
      ans += cnt.get(t) * k - total.get(t);
    }
    cnt.set(s, (cnt.get(s) || 0) + 1);
    total.set(s, (total.get(s) || 0) + k);
    s = t;
  }
  return ans;
};
