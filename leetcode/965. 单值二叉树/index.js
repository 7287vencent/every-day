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
var isUnivalTree = function (root) {
  let left =
    root.left === null ||
    (root.val === root.left.val && isUnivalTree(root.left));
  let right =
    root.right === null ||
    (root.val === root.right.val && isUnivalTree(root.right));
  return left && right;
};
