/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let mid = (left + right) / 2 >>> 0
    if (numbers[mid] < numbers[right]) {
      right = mid
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else {
      right--
    }
  }
  return numbers[left]
};



/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
};