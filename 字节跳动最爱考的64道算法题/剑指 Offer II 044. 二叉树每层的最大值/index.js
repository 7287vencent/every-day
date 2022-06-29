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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  let stask = [root];
  let res = [];
  while (stask.length) {
    let max = Number.MIN_SAFE_INTEGER;
    let len = stask.length;
    while (len > 0) {
      len--;
      let node = stask.shift();
      if (max < node.val) {
        max = node.val;
      }
      // ? 出在这
      node.left && stask.push(node.left);
      node.right && stask.push(node.right);
    }
    res.push(max);
  }
  return res;
};
