/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sign = "+",
    n = 0,
    c,
    stack = [];
  for (let i = 0; i <= s.length; i++) {
    c = s.charAt(i);
    if (c === " ") continue;
    if (c <= "9" && c >= "0") {
      n = n * 10 + parseInt(c);
      continue;
    }
    if (sign === "+") {
      stack.push(n);
    } else if (sign === "-") {
      stack.push(-n);
    } else if (sign === "*") {
      stack.push(stack.pop() * n);
    } else if (sign === "/") {
      stack.push(Math.trunc(stack.pop() / n));
    }
    sign = c;
    n = 0;
  }
  return stack.reduce((acc, n) => acc + n, 0);
};
