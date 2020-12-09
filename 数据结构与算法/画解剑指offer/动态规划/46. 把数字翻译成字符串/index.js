/**
 * @param {number} num
 * @return {number}
 */
// todo 方法一
var translateNum = function (num) {
  num += ''
  let x = 1, y = 1
  for (let i = 1; i < num.length; i++) {
    let cur = +(num[i - 1] + num[i])
    // ? 下面代码的本质，就是 当 cur >= 10 && cur <= 25 的时候，x = y , y = x + y，否则两个都是 y
    if (cur >= 10 && cur <= 25) {
      [x, y] = [y, x + y]
    } else {
      [x, y] = [y, y]
    }
  }
  return y
};

console.log(translateNum(12558))

// todo 方法一 和方法二的思路完全一样，只不过方法一没有使用数组，只是使用了两个变量

/**
 * @param {number} num
 * @return {number}
 */
// todo 方法二
var translateNum = function (num) {

  let str = num.toString()
  let len = str.length;
  let dp = [1, 1]
  for (let i = 1; i < len + 1; i++) {
    let f = Number(str.slice(i - 1, i + 1))
    //    console.log('f',f,i,dp[i],dp[i-1])
    if (f <= 25 && f >= 10) {
      // console.log()
      dp[i + 1] = dp[i] + dp[i - 1]
    } else {
      dp[i + 1] = dp[i]
    }
  }
  console.log(dp)
  return dp[dp.length - 1]
};