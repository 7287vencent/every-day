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
// todo 方法一：dfs 递归
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  const dfs = (root, p, q) => {
    if (!root) return false;
    let lson = dfs(root.left, p, q);
    let rson = dfs(root.right, p, q);
    if (
      (lson && rson) ||
      ((root.val === p.val || root.val === q.val) && (lson || rson))
    ) {
      ans = root;
    }
    return lson || rson || root.val === p.val || root.val === q.val;
  };
  dfs(root, p, q);
  return ans;
};

// todo 方法二：存储父节点
var lowestCommonAncestor = function (root, p, q) {
  let parent = new Map();
  let visited = new Map();
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
  while (p) {
    visited.set(p.val, p);
    p = parent.get(p.val);
  }
  while (q) {
    if (visited.has(q.val)) {
      return q;
    }
    q = parent.get(q.val);
  }
  return null;
};
