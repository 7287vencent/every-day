/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  let stack = [];
  let pos = -Infinity;
  for (let n of preorder) {
    while (stack.length && n > stack[stack.length - 1]) pos = stack.pop();
    if (n < pos) return false;
    stack.push(n);
  }
  return true;
};
