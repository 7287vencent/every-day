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
var longestConsecutive = function (root) {
  let max = 0;
  const dfs = (root, parent, len) => {
    if (!root) {
      return 0;
    }
    len = parent && parent.val + 1 === root.val ? len + 1 : 1;
    max = Math.max(max, len);
    dfs(root.left, root, len);
    dfs(root.right, root, len);
  };
  dfs(root, null, 1);
  return max;
};
