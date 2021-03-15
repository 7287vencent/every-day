/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return root;
  // 中序遍历 + 双指针
  let first = null;
  let last = null;
  const helper = node => {
    if (node !== null) {
      helper(node.left);
      if (last !== null) {
        last.right = node;
        node.left = last;
      } else {
        first = node;
      }
      last = node;
      helper(node.right);
    }
  };
  helper(root);
  first.left = last;
  last.right = first;
  return first;
};
