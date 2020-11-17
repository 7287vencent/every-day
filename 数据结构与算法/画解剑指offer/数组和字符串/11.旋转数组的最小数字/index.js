/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0, right = numbers.length - 1
  let mid
  while (left < right) {
    mid = (left + right) / 2 | 0
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

// let arr = [3, 4, 5, 1, 2, 2]
// minArray(arr)