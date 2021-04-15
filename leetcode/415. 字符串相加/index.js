/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let op = 0;
  let res = "";
  while (i >= 0 || j >= 0 || op === 1) {
    let a = i >= 0 ? +num1[i] : 0;
    let b = j >= 0 ? +num2[j] : 0;
    let sum = a + b + op;
    res += sum % 10;
    op = (sum / 10) >> 0;
    i--;
    j--;
  }
  return res.split("").reverse().join("");
};
