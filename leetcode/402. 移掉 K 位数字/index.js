/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  // ? 1. 通过栈，筛选出结果
  for (let dist of num) {
    while (stack.length && stack[stack.length - 1] > dist && k) {
      stack.pop();
      k--;
    }
    stack.push(dist);
  }
  // ? k 可能有剩余
  for (; k > 0; k--) {
    stack.pop();
  }
  // ? 组合结果
  // ? 删除栈顶的 0
  while (stack[0] === "0") {
    stack.shift();
  }
  let ans = stack.join("");
  return ans == "" ? "0" : ans;
};
