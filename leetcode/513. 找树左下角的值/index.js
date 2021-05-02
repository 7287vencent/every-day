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
  if (!root) return null;
  let queue = [root];
  let level = 0;
  let curlevel = 0;
  let res = 0;
  while (queue.length) {
    let len = queue.length;
    level++;
    while (len--) {
      let node = queue.shift();
      if (level !== curlevel) {
        curlevel = level;
        res = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};
