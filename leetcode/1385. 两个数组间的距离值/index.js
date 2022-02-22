/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    let pos = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        // ? 不符合条件
        pos = false;
        break;
      }
    }
    if (pos) {
      res += 1;
    }
  }
  return res;
};
