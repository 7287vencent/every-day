/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var res = 0; //最大字符串长度
  var str = ''; // 重头遍历S字符串，存储不同的字符串
  for (var i = 0; i < s.length; i++) {
    //判断当前字符是否在str中  如果在 就代表有重复的字符  没有就加上
    if (str.indexOf(s[i], 0) == -1) {
      str += s[i];
      
    } else {
      //发现重复的字符
      //判断当前的最大字符串长度
      if (str.length > res) {
        res = str.length;
      }
      //查找当前元素在str中的位置
      var p = str.indexOf(s[i], 0);
      //从p后面一个字符开始截取str字符串,并加上当前的字符，组成新的字符
      str = str.slice(p + 1);
      str += s[i];
    }
  }
  //判断str的长度是否是所求
  if (str.length > res) {
    res = str.length;
  }
  console.log(str.length,res)
  return res;
};
console.log(lengthOfLongestSubstring(' '));