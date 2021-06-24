/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  if (s.length === 0) {
    return null;
  }
  let stack = [];
  for (let i = 0; i < s.length; ) {
    // console.log(stack, s[i])
    if (s[i] === ")") {
      i++;
      stack.pop();
      continue;
    }
    if (s[i] === "(") {
      i++;
      continue;
    }
    let j = i;
    while (s[j + 1] >= "0" && s[j + 1] <= "9") {
      //console.log(s[j + 1] >= '0', s[j + 1] <= '9', s[j + 1])
      j++;
    }
    let c = s.substring(i, j + 1);
    //console.log('->>>',c, i, j)
    i = j + 1;
    pos = false;
    let root = new TreeNode(c);
    if (stack.length) {
      let parent = stack[stack.length - 1];
      if (!parent.left) parent.left = root;
      else parent.right = root;
    }
    stack.push(root);
  }
  return stack[stack.length - 1];
};
