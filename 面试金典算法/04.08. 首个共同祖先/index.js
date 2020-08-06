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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 一共有三种情况.
  // 1. p,q，位于 root 节点的两端，结果就是root
  // 2. p,q 位于 root 节点的一边（左子树或右子树），递归在子树中找。
  // 3. 一个节点为 root ,一个节点为 其他，返回root
  // 3
  if (!root || root == p || root == q) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  // 1
  if (left && right) return root
  //2
  return left ? left : right
};