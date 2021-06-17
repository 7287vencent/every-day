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
 * @return {number[][]}
 */
var findLeaves = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let ans = [];
  const fn = node => {
    if (!node) return false;
    if (!node.left && !node.right) {
      return true;
    }
    fn(node.left) && res.push(node.left.val) && (node.left = null);
    fn(node.right) && res.push(node.right.val) && (node.right = null);
    return false;
  };
  while (true) {
    if (!root.left && !root.right) {
      ans.push([root.val]);
      break;
    }
    fn(root);
    ans.push(res);
    res = [];
  }
  return ans;
};
