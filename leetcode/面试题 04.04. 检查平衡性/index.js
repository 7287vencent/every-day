/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const height = root => {
    if (!root) {
      return 0;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
  };
  const balance = root => {
    if (!root) {
      return true;
    }
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      balance(root.left) &&
      balance(root.right)
    );
  };
  return balance(root);
};
