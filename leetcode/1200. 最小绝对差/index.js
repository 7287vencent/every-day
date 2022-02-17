/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let left = 0,
    right = 1,
    min = Number.MAX_SAFE_INTEGER;
  let res = [];
  while (right < arr.length) {
    let k = arr[right] - arr[left];
    if (k < min) {
      res = [];
      res.push([arr[left], arr[right]]);
      min = k;
    } else if (k === min) {
      res.push([arr[left], arr[right]]);
    }
    left++;
    right++;
  }
  return res;
};
