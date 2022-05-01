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
  let parent = new Map();
  let visited = new Map();
  // ? 建立所有节点的父节点关系
  const dfs = root => {
    if (root.left) {
      parent.set(root.left.val, root);
      dfs(root.left);
    }
    if (root.right) {
      parent.set(root.right.val, root);
      dfs(root.right);
    }
  };
  dfs(root);
  // ? 找出p的所有父节点
  while (p) {
    visited.set(p.val, p);
    p = parent.get(p.val);
  }
  // ? 找出 q 在 p所有父节点中最近的
  while (q) {
    if (visited.has(q.val)) {
      return q;
    }
    q = parent.get(q.val);
  }
  return null;
};
