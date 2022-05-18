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
var minDepth = function (root) {
  const deepLen = root => {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      return 1;
    }
    let min = Number.MAX_VALUE;
    if (root.left) {
      min = Math.min(deepLen(root.left), min);
    }
    if (root.right) {
      min = Math.min(deepLen(root.right), min);
    }
    return min + 1;
  };
  return deepLen(root);
};
