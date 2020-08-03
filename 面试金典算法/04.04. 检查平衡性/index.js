/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isAns // 结果值
var isBalanced = function (root) {
  isAns = true
  dfs(root)
  return isAns
};
// 计算深度
function dfs (root) {
  // 叶子节点 深度为0
  if (!root) return 0
  let left = dfs(root.left)
  let right = dfs(root.right)
  if (Math.abs(left - right) > 1) return isAns = false
  // 当前 层次的深度 等于 子节点的最大深度 + 1
  return Math.max(left, right) + 1
}

