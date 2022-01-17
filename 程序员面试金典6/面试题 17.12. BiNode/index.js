/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  let dummy = new TreeNode(-1);
  let pre = dummy;
  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    pre.right = node;
    node.left = null;
    pre = pre.right;
    dfs(node.right);
  };
  dfs(root);
  return dummy.right;
};
