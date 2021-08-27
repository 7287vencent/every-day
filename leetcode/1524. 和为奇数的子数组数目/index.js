/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let MOULD = 1000000007;
  let odd = 0;
  let even = 1;
  let sum = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    res = (res + (sum % 2 === 0 ? odd : even)) % MOULD;
    if (sum % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return res;
};
