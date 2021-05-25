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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let ans = [];
  const dfs = (root, targetSum, temp) => {
    if (!root) {
      return;
    }
    temp.push(root.val);
    if (!root.left && !root.right && targetSum === root.val) {
      ans.push([...temp]);
    }
    root.left && dfs(root.left, targetSum - root.val, temp);
    root.right && dfs(root.right, targetSum - root.val, temp);
    temp.pop();
  };
  dfs(root, targetSum, []);
  return ans;
};
