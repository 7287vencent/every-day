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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  const dfs = root => {
    if (!root) {
      return null;
    }
    root.left = dfs(root.left);
    root.right = dfs(root.right);
    if (root.val === 0 && root.left === null && root.right === null) {
      return null;
    }
    return root;
  };
  return dfs(root);
};
