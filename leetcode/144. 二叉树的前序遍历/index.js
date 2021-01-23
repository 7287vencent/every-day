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
// todo 递归
var preorderTraversal = function (root, arr = []) {
  if (root) {
      arr.push(root.val)
      preorderTraversal(root.left, arr)
      preorderTraversal(root.right, arr)
  }
  return arr

};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */ // todo 迭代
var preorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      result.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return result;
};
