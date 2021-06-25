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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let res = [];
  let visited = new Map();
  let trans = root => {
    if (!root) {
      return "#";
    }
    let left = trans(root.left);
    let right = trans(root.right);
    let str = `${left},${right},${root.val}`;
    let count = visited.get(str);
    if (count === 1) {
      res.push(root);
    }
    visited.set(str, (count || 0) + 1);
    return str;
  };
  trans(root);
  return res;
};
