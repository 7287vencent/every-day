/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  let str = '0' + num.toString(2)
  let big = str.slice(0)
  let small = str.slice(0)
  let bigFlag = false
  let smallFlag = false
  // console.log(str)
  for (let i = str.length - 2; i >= 0; i--) {
    if (!bigFlag && str[i] + str[i + 1] == '01') {
      big = str.slice(0, i) + '10' + str.slice(i + 2).split('').sort((a, b) => a - b).join('')
      bigFlag = true
      // console.log('big:',big)
    }
    if (!smallFlag && str[i] + str[i + 1] == '10') {
      small = str.slice(0, i) + '01' + str.slice(i + 2).split('').sort((a, b) => b - a).join('')
      smallFlag = true
      // console.log('small:',small)
    }
  }
  if (bigFlag) {
    big = parseInt(big, 2)
    if (big > 2147483647) {
      big = -1
    }
  } else {
    big = num * 2
  }
  if (smallFlag) {
    small = parseInt(small, 2)
  } else {
    small = -1
  }
  return [big, small]
};
