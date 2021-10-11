/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = "";
  let curry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = curry;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;
    ans += sum % 2;
    curry = (sum / 2) >> 0;
  }
  ans += curry == 1 ? curry : "";
  return ans.split("").reverse().join("");
};
