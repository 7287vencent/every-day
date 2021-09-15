/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let n = s.length;
  let arr = Array.from(s);
  const reverse = (arr, left, right) => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };
  for (let i = 0; i < n; i += k * 2) {
    reverse(arr, i, Math.min(i + k, n) - 1);
  }
  return arr.join("");
};
