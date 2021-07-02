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
var longestUnivaluePath = function (root) {
  let ans = 0;

  const dfs = root => {
    if (!root) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);

    let arrowLeft = 0;
    let arrowRight = 0;
    if (root.left && root.left.val === root.val) {
      arrowLeft = left + 1 + arrowLeft;
    }
    if (root.right && root.right.val === root.val) {
      arrowRight = right + 1 + arrowRight;
    }
    ans = Math.max(ans, arrowRight + arrowLeft);
    return Math.max(arrowLeft, arrowRight);
  };

  dfs(root);
  return ans;
};
