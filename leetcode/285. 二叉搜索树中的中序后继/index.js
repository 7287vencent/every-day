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
  // ? 1. 当前节点存在右子树，返回右子树最左侧节点
  if (p.right) {
    p = p.right;
    while (p.left) p = p.left;
    return p;
  }
  // ? 2. 中序遍历
  let stack = [];
  let cur = root;
  let pre = -Infinity;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre === p.val) return cur;
    pre = cur.val;
    cur = cur.right;
  }
  return null;
};
