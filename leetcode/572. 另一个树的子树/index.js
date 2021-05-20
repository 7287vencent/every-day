/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const check = (r, s) => {
    if (r === null && s === null) {
      return true;
    }
    if (r === null || s === null || r.val !== s.val) {
      return false;
    }
    return check(r.left, s.left) && check(r.right, s.right);
  };
  const dfs = (r, s) => {
    if (!r) {
      return false;
    }
    return check(r, s) || dfs(r.left, s) || dfs(r.right, s);
  };
  return dfs(root, subRoot);
};
