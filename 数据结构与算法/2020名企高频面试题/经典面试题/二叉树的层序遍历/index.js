/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let result = []
  while (queue.length) {
    let level = []
    for (let i = 0, len = queue.length; i < len; i++) {
      root = queue.shift()
      level.push(root.val)
      if (root.left) {
        queue.push(root.left)
      }
      if (root.right) {
        queue.push(root.right)
      }
    }
    result.push(level)
  }
  return result
};