/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let curK = k
  let res = 0
  function dfs (root) {
    if (root === null) return null
    dfs(root.right)
    curK--
    if (curK === 0) {
      res = root.val
    }
    dfs(root.left)
  }
  dfs(root)
  return res
};



// todo 方法二
var kthLargest = function (root, k) {
  const array = [];

  var dfs = function (root) {
    if (!root) return;
    dfs(root.right);
    array.push(root.val);
    dfs(root.left);
  }

  dfs(root);

  for (let i = 0, length = array.length; i < length; i++) {
    if ((i + 1) === k) {
      return array[i];
    }
  }
};