/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let flag = false; // 结果 奇偶
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0))
    flag = true; // 符号相反(奇)
  [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)]; //都取绝对值

  let _func = (curr, div) => {
    if (curr < div) return 0; //进来发现 当前被除数<除数 返回0
    let cnt = 1,
      temp = div;
    while (temp + temp < curr) {
      cnt = cnt + cnt;
      temp = temp + temp;
    }
    return (
      cnt + _func(curr - temp, div)
    ); /* 60/8 = 4+(60-32)/8 =4+2+(28-16)/8 = 4+2+1+(12-8)/8 = 4+2+1+0 = 7 */
  };

  let res = _func(dividend, divisor);
  flag && (res = -res); //结果为奇数

  return res > 2147483647 ? 2147483647 : res; //溢出
};
