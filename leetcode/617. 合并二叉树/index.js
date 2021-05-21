/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const dfs = (r1, r2) => {
    if (!r1) {
      return r2;
    }
    if (!r2) {
      return r1;
    }
    let root = new TreeNode(r1.val + r2.val);
    root.left = dfs(r1.left, r2.left);
    root.right = dfs(r1.right, r2.right);
    return root;
  };
  return dfs(root1, root2);
};
