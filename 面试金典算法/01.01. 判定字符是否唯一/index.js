/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  // 方法一： 使用 obj 的思路
  // let obj = {}
  // for (let i = 0; i < astr.length; i++) {
  //     if (obj[astr[i]]) {
  //         return false
  //     } else {
  //         obj[astr[i]] = true
  //     }
  // }
  // return true
  // 方法二：使用replace 的思路
  // for(let i = 0; i < astr.length; i++) {
  //     let s = astr.replace(new RegExp(astr[i], 'g'), '')
  //     if (s.length !== astr.length - 1) {
  //         return false
  //     }
  // }
  // return true
  // 方法三：利用 indexOf 和 lastIndexOf
  var pos = true
  for (let i = 0; i < astr.length / 2 | 0; i++) {
    var firstIndex = astr.indexOf(astr[i])
    var lastIndex = astr.lastIndexOf(astr[i])
    if (firstIndex < lastIndex) {
      pos = false
    }
  }
  return pos
};