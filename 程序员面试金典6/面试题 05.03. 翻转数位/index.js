/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  if (num === -1) {
    return 32;
  }
  var ans = 1,
    cnt = 0,
    pre = 0;
  while (num) {
    if (num & 1) {
      //如果最后一位是1
      cnt++;
    } else {
      ans = Math.max(ans, cnt + pre + 1);
      pre = cnt; //pre保存0右侧有多少位1
      cnt = 0; //cnt在下一轮循环时找当前0位的左侧有多少个1
    }
    num = num >>> 1;
  }
  ans = Math.max(ans, cnt + pre + 1); //类似11100110这种情况末尾需再比较一次；
  return ans;
};
