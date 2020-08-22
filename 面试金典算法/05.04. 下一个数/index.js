/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  let small = num.toString(2)
  // console.log(small.length)
  // 前面添 0, 如果小于 32 则添一个 0
  small = small.length < 32 ? '0' + small : small
  let bigger = small
  let res_small = -1
  let res_bigger = -1
  // small 找到 10 把 10 => 01, 右侧剩下的 1 移动到高位
  for (let i = small.length - 1; i >= 0; i--) {
    if (small[i] == 0 && small[i - 1] == 1) {
      //console.log('small', small)
      small = flip(small, i, '1')
      small = flip(small, i - 1, '0')
      // console.log("=>>>",small, i, small.length)
      for (let left = i + 1, right = small.length - 1; left < right;) {
        while (left < right && small[left] == 1) left++
        while (left < right && small[right] == 0) right--
        if (left < right) {
          small = flip(small, left, '1')
          small = flip(small, right, '0')
        }
      }
      res_small = parseInt(small, 2)
      //console.log("=>>  ", small, parseInt(small, 2))
      break;
    }
  }

  // bigger 找到 01 , 把 01 => 10 ，右侧 1 移动到低位
  for (let i = bigger.length - 1; i >= 0; i--) {
    if (bigger[i] == 1 && bigger[i - 1] == 0) {
      bigger = flip(bigger, i, '0')
      bigger = flip(bigger, i - 1, '1')
      // console.log("=>>>",bigger, i)
      for (let left = i + 1, right = bigger.length - 1; left < right;) {
        while (left < right && bigger[left] == 0) left++
        while (left < right && bigger[right] == 1) right--
        if (left < right) {
          bigger = flip(bigger, left, '0')
          bigger = flip(bigger, right, '1')
        }
      }
      res_bigger = parseInt(bigger, 2)
      // console.log("=>>>>", bigger, parseInt(bigger, 2))
      break;
    }
  }
  //console.log(res_bigger, res_small)
  return [res_bigger, res_small]
};
/**
* str 为源字符串
* i 为 修改的字符 位置
* res 为修改的结果
*/
function flip (str, i, res) {
  return str.substring(0, i) + res + str.substring(i + 1)
}
