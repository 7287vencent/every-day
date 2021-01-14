/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var str1 = strs[0];
  // console.log(str1.length)
  var p = 'c';
  var result = '';
  if (!strs.length) {
    return result;
  }
  for (var i = 0; i < str1.length; i++) {
    p += str1[i];
    var temp = strs.every(value => {
      // console.log(p)
      return value.substring(0, i + 1) === p;
    })
    // console.log(temp)
    if (!temp) {
      break;
    }
    result = p;
  }
  // console.log(p)
  return result;
};
console.log(longestCommonPrefix(["c", "acc", "ccc"]))