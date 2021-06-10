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
var countUnivalSubtrees = function (root) {
  if (!root) {
    return 0;
  }
  let count = 0;
  const uni = root => {
    if (!root.left && !root.right) {
      count++;
      return true;
    }
    let pos = true;
    if (root.left !== null) {
      pos = uni(root.left) && pos && root.left.val === root.val;
    }
    if (root.right !== null) {
      pos = uni(root.right) && pos && root.right.val === root.val;
    }
    if (!pos) return false;
    count++;
    return true;
  };
  uni(root);
  return count;
};
