/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // i 之后的数都小于他，就为0
  let n = temperatures.length;
  let res = Array(n).fill(0);
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let pos = stack.pop();
      res[pos] = i - pos;
    }
    stack.push(i);
  }
  return res;
};
