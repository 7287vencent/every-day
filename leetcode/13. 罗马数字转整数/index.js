/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let objVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let pre = objVal[s[0]];
  let sum = 0;
  for (let i = 1; i < s.length; i++) {
    let num = objVal[s[i]];
    if (pre < num) {
      sum -= pre;
    } else {
      sum += pre;
    }
    pre = num;
  }
  sum += pre;
  return sum;
};
