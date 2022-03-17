/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let n = arr.length;
  if (n === 1) {
    return arr[0];
  }
  let count = 1;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      if (count > n / 4) {
        return arr[i];
      }
    } else {
      count = 1;
    }
  }
};
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n - n / 4; i++) {
    if (arr[i] === arr[i + Math.floor(n / 4)]) {
      return arr[i];
    }
  }
};
