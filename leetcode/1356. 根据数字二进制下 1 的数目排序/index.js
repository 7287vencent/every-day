/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const hammingWeight = n => {
    let count = 0;
    while (n != 0) {
      count += n & 1;
      n = n >>> 1;
    }
    return count;
  };
  return arr.sort((a, b) => {
    let a1 = hammingWeight(a);
    let b1 = hammingWeight(b);
    return a1 === b1 ? a - b : a1 - b1;
  });
};
