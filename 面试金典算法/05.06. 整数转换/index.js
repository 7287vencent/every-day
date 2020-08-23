/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let temp = A ^ B
  let count = 0
  while (temp != 0) {
    temp &= (temp - 1)
    count++
  }
  return count
};