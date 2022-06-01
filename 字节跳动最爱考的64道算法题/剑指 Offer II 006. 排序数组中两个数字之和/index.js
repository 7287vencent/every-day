/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let low = 0,
    high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low, high];
    } else if (sum < target) {
      low++;
    } else {
      high--;
    }
  }
  return [-1, -1];
};
