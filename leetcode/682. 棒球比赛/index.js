/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [];
  for (let op of ops) {
    if (op === "+") {
      let one = stack[stack.length - 2];
      let two = stack[stack.length - 1];
      stack.push(+one + +two);
    } else if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      stack.push(+stack[stack.length - 1] * 2);
    } else {
      stack.push(op);
    }
  }
  let sum = stack.reduce((pre, cur) => pre + +cur, 0);
  return sum;
};
