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
  if (root === null) return null
  if (root.val === p.val || root.val === q.val) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left === null && right === null) { // 叶子节点直接返回 null
    return null
  } else if (left === null && right) { // 一个节点分布在 右子树上
    return right
  } else if (left && right === null) { // 一个节点分布在 左子树上
    return left
  } else { // p, q 分布在 root 的左右两侧
    return root
  }
};


// todo 方法二：思路差不多，优秀版
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root.val === q.val || root.val === p.val) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null) return right;
  if (right === null) return left;
  return root;
};