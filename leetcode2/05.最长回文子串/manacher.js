function getP5 (str) {
  var p = [],
    mx = 0,
    id = 0;
  var i;
  // 将字符串转化为奇数长度获取到新的字符串
  var newStr = '#';
  var len = str.length;
  for (i = 0; i < len; i++) {
    newStr += str[i] + '#';
  }
  var newLen = newStr.length;
  for (i = 0; i < newLen; i++) {
    p[i] = 0;
  }
  // 时间复杂度为O(n)，空间复杂度为O(1)获取到所有的子回文的长度值组成的数组
  for (i = 0; i < newLen; i++) {
    // mx表示当前边界值最大的回文子串的边界值
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
    // 超出其半径的位置再做额外判断
    while ((newStr[i + p[i]] == newStr[i - p[i]]) && newStr[i + p[i]]) {
      p[i]++;
    }
    // 获取到边界最大的回文子串的中心位置以及边界值，以保证后续迭代可以做以上快捷处理
    if (i + p[i] > mx) {
      id = i;
      mx = id + p[i];
    }
  }
  return p;
}
// ————————————————
// 版权声明：本文为CSDN博主「一村又一桩」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/fendouzhe123/article/details/39496299