/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let i = 0;
  let stack = [];
  for (let element of pushed) {
    stack.push(element);
    // stack 栈顶元素等于 popped 头部就 stack出栈
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return !stack.length;
};
