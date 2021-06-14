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
var sumOfLeftLeaves = function (root) {
  let res = 0;
  const fn = (root, pos) => {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right && pos) {
      res += root.val;
    }
    root.left && fn(root.left, true);
    root.right && fn(root.right, false);
  };
  fn(root, false);
  return res;
};
