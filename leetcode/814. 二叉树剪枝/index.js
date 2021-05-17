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
    if (!root) return 0;
    let l = dfs(root.left);
    let r = dfs(root.right);
    if (l === 0) root.left = null;
    if (r === 0) root.right = null;
    return root.val + l + r;
  };
  let ans = new TreeNode(-1);
  ans.left = root;
  dfs(ans);
  return ans.left;
};
