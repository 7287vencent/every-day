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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let pos = true;
  let res = [];
  while (queue.length) {
    let len = queue.length;
    let arr = [];
    while (len) {
      let root = queue.shift();
      arr.push(root.val);
      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
      len--;
    }
    if (pos === -1) {
      arr.reverse();
    }
    res.push(arr);
    pos *= -1;
  }
  return res;
};
