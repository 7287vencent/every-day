/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// todo 递归
var isValidBST = function (root) {
  const helper = (root, lower, upper) => {
    if (!root) {
      return true;
    }
    if (lower >= root.val || root.val >= upper) {
      return false;
    }
    return (
      helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    );
  };
  return helper(root, -Infinity, Infinity);
};
// todo 中序遍历
var isValidBST = function (root) {
  if (!root) {
    return false;
  }
  let cur = root;
  let stack = [];
  let pre = -Infinity;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre >= cur.val) {
      return false;
    }
    pre = cur.val;
    cur = cur.right;
  }
  return true;
};
