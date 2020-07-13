/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  // 使用 replace 方法
  // if (s1.length !== s2.length) return false
  // let s3 
  // for (let i = 0; i < s1.length; i++) {
  //     s3 = s2.replace(s1[i], '')
  //     if (s3.length !== s2.length - 1) {
  //         return false
  //     } else {
  //         s2 = s3
  //     }
  // }
  // return true
  if (s1.length != s2.length) return false;
  if (s1 === s2) return true;

  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

  return s1 === s2;
};