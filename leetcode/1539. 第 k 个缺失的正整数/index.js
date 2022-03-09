/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let miss = -1,
    current = 1,
    ptr = 0;
  for (let i = 0; i < k; current++) {
    if (current === arr[ptr]) {
      ptr++;
    } else {
      i++;
      miss = current;
    }
  }
  return miss;
};
