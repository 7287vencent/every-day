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
  if (root === null) return []
  let queue = [root]
  let res = []
  let index = 1
  while (queue.length !== 0) {
    let level = []
    for (let i = 0, len = queue.length; i < len; i++) {
      root = queue.shift()
      index % 2 === 0 ? level.unshift(root.val) : level.push(root.val)
      // ? index 可以省略
      // res.length % 2 !== 0 ? level.unshift(root.val) : level.push(root.val)
      if (root.left) {
        queue.push(root.left)
      }
      if (root.right) {
        queue.push(root.right)
      }
    }
    ++index
    res.push(level)
  }
  return res
};