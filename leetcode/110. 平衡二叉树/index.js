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
var isBalanced = function (root) {
  const height = root => {
    if (!root) {
      return 0;
    }
    let left = height(root.left);
    let right = height(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    } else {
      return Math.max(left, right) + 1;
    }
  };
  return height(root) >= 0;
};
