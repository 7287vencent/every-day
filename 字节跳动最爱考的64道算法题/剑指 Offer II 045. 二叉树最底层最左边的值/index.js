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
var findBottomLeftValue = function (root) {
  let ret = 0;
  const queue = [root];
  while (queue.length) {
    const p = queue.shift();
    if (p.right) {
      queue.push(p.right);
    }
    if (p.left) {
      queue.push(p.left);
    }
    ret = p.val;
  }
  return ret;
};
