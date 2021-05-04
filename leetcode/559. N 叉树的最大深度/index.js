/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let ans = 1;
  for (let child of root.children) {
    ans = Math.max(ans, 1 + maxDepth(child));
  }
  return ans;
};
