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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const dfs = (root, pre, cur) => {
    if (!root) {
      return 0;
    }
    let res = 0;
    cur += root.val;
    // ?
    res = pre.get(cur - targetSum) || 0;
    pre.set(cur, (pre.get(cur) || 0) + 1);
    res += dfs(root.left, pre, cur);
    res += dfs(root.right, pre, cur);
    pre.set(cur, (pre.get(cur) || 0) - 1);
    return res;
  };
  let pre = new Map();
  pre.set(0, 1);
  return dfs(root, pre, 0);
};
