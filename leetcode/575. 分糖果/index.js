/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  candyType.sort((a, b) => a - b);
  let count = 1;
  for (let i = 1; i < candyType.length && count < candyType.length / 2; i++) {
    if (candyType[i] > candyType[i - 1]) {
      count++;
    }
  }
  return count;
};
