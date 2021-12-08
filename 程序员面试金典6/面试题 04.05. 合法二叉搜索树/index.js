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
var isValidBST = function (root) {
  let pre = -Infinity;
  const helper = root => {
    if (!root) return true;
    if (helper(root.left)) {
      if (pre < root.val) {
        pre = root.val;
        return helper(root.right);
      }
    }
    return false;
  };
  return helper(root);
};

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
function isValidBST(root, low = -Infinity, high = Infinity) {
  if (root === null) {
    return true;
  }

  const { val, left, right } = root;

  if (val <= low || val >= high) {
    return false;
  } else {
    return isValidBST(left, low, val) && isValidBST(right, val, high);
  }
}
