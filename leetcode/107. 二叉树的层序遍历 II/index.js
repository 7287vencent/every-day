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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    let arr = [];
    while (len) {
      let node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
    res.push(arr);
  }
  res.reverse();
  return res;
};
