/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (root === null) return []
  let queue = [root]
  let result = []
  while (queue.length > 0) {
    root = queue.shift()
    result.push(root.val)
    if (root.left !== null) {
      queue.push(root.left)
    }
    if (root.right !== null) {
      queue.push(root.right)
    }
  }
  return result
};