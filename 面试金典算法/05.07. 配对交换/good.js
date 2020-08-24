/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  let str = num.toString(2), res = ''
  str = str.length % 2 === 1 ? '0' + str : str
  // console.log(str)
  for (let i = 0; i < str.length; i++) {
    let ch = i % 2 === 0 ? str[i + 1] || str[i] : str[i - 1] || ''
    res += ch
  }
  // console.log(res)
  return BigInt('0b' + res).toString()
};
