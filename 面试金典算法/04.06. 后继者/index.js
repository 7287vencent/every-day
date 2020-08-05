/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  // 递归解法
  // if (!root && p) return null
  // if (root.val <= p.val) {
  //     return inorderSuccessor(root.right, p)
  // } else {
  //     let left = inorderSuccessor(root.left, p)
  //     return left ? left : root
  // }
  // 非递归
  // 如果p节点有 右子树，则后继节点 为右子树中 最左侧的节点
  // 如果p没有右子树，从p往root的路径找，后继节点为，最近左子树的root节点
  if (p.right) {
    p = p.right
    while (p.left) {
      p = p.left
    }
    return p
  }
  let res = null
  while (root != p) {
    if (root.val < p.val) {
      root = root.right
    } else {
      res = root
      root = root.left
    }
  }
  return res
};