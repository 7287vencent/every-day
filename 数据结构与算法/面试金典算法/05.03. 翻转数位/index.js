/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  let str = num.toString(2)
  let arr = str.split('0')
  if (arr.length === 1) return arr[0].length + 1
  let res = 0
  let temp
  for (let i = 0; i < arr.length - 1; i++) {
    temp = arr[i].length + arr[i + 1].length
    res = res > temp ? res : temp
  }
  return res + 1
};