/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const n = tokens.length;
  for (let i = 0; i < n; i++) {
    const token = tokens[i];
    if (isNumber(token)) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === "+") {
        stack.push(num1 + num2);
      } else if (token === "-") {
        stack.push(num1 - num2);
      } else if (token === "*") {
        stack.push(num1 * num2);
      } else if (token === "/") {
        stack.push(
          num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
        );
      }
    }
  }
  return stack.pop();
};

const isNumber = token => {
  return !("+" === token || "-" === token || "*" === token || "/" === token);
};
