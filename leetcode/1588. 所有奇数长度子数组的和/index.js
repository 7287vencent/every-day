/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let res = 0;
  let left_odd, left_even, right_odd, right_even;
  for (let i = 0, n = arr.length; i < n; i++) {
    left_odd = Math.floor((i + 1) / 2);
    left_even = Math.floor(i / 2 + 1);
    right_odd = Math.floor((n - i) / 2);
    right_even = Math.floor((n - i - 1) / 2 + 1);
    console.log(left_odd, left_even, right_odd, right_even);
    res += arr[i] * (left_odd * right_odd + left_even * right_even);
  }
  return res;
};
