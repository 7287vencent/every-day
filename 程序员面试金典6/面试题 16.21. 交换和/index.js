/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function (array1, array2) {
  const sum1 = array1.reduce((a, b) => a + b);
  const sum2 = array2.reduce((a, b) => a + b);

  let diff = sum1 - sum2; // 2a
  if (diff % 2 !== 0) {
    return [];
  }
  diff /= 2;
  const set = new Set(array2);
  for (const num of array1) {
    if (set.has(num - diff)) {
      return [num, num - diff];
    }
  }
  return [];
};
