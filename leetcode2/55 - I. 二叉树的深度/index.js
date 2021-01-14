/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return null
  let max = 0
  function deepFun (node, dep) {
    if (!node.left && !node.right) {
      if (max < dep + 1) {
        max = dep + 1
      }
    }
    if (node.left) deepFun(node.left, dep + 1)
    if (node.right) deepFun(node.right, dep + 1)
  }
  deepFun(root, 0)
  return max
};