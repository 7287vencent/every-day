/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  if (num >= 1 || num <= 0) return 'ERROR';

  let t = 0;
  let res = [];
  while (t <= 32) {
    num = num * 2;
    let zheng = parseInt(num);
    num = num - zheng;
    res.push(zheng);
    t = res.length;
    if (num === 0) {
      let temp = res.join('')
      return '0.'.concat(temp)
    }
  }
  return "ERROR";
};