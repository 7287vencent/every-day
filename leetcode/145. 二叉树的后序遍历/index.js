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
 * @return {number[]}
 */
// todo 递归
var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};

// todo 迭代
var postorderTraversal = function (root) {
  let result = [];
  if (!root) {
    return result;
  }
  let prev = null;
  let stack = [];
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right == null || root.right == prev) {
      result.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return result;
};
