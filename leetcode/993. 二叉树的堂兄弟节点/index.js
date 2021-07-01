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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let x_p = null,
    x_d = 0,
    x_f = false;
  let y_p = null,
    y_d = 0,
    y_f = false;

  const dfs = (node, parent, depth) => {
    if (!node) {
      return;
    }
    if (node.val === x) {
      [x_p, x_d, x_f] = [parent, depth, true];
    } else if (node.val === y) {
      [y_p, y_d, y_f] = [parent, depth, true];
    }
    if (x_f && y_f) {
      return;
    }
    dfs(node.left, node, depth + 1);
    if (x_f && y_f) {
      return;
    }
    dfs(node.right, node, depth + 1);
  };
  dfs(root, null, 0);
  return x_p !== y_p && x_d === y_d;
};
