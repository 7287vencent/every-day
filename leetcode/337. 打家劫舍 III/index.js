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
 * @return {number}
 */
var rob = function (root) {
  const dfs = node => {
    if (!node) {
      return [0, 0];
    }
    let l = dfs(node.left);
    let r = dfs(node.right);
    // ? node
    let a = node.val + l[1] + r[1];
    let b = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return [a, b];
  };
  let ans = dfs(root);
  return Math.max(ans[0], ans[1]);
};
