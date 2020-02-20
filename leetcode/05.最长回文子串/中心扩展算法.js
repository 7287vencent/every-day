// 方法3
// abba
function getP3 (str) {
  var maxLength = 1,
    start = 0,
    len = str.length,
    low, high;
  for (var i = 1; i < len; ++i) {
    low = i - 1;
    high = i;
    while (low >= 0 && high < len && str[low] === str[high]) {
      if (high - low + 1 > maxLength) {
        start = low;
        maxLength = high - low + 1;
      }
      --low;
      ++high;
    }
  }
  low = i - 1;
  high = i + 1;
  while (low >= 0 && high < len && str[low] === str[high]) {
    if (high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }
    --low;
    ++high;
  }
  return maxLength;
}

// ————————————————
// 版权声明：本文为CSDN博主「一村又一桩」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/fendouzhe123/article/details/39496299