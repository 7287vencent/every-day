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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let val,
    res = root.val;
  while (root) {
    val = root.val;
    res = Math.abs(val - target) < Math.abs(res - target) ? val : res;
    root = target < val ? root.left : root.right;
  }
  return res;
};
