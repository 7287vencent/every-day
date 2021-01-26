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
// todo 递归
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// todo 广度优先
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let ans = 0;
  while (queue.length > 0) {
    let len = queue.length;
    while (len) {
      let cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      len--;
    }
    ans++;
  }
  return ans;
};
