/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 最小值
  let pre = Number.MIN_SAFE_INTEGER
  // 中序遍历 函数
  function help (root) {
    if (!root) return true
    if (help(root.left)) {
      if (pre < root.val) {
        pre = root.val
        return help(root.right)
      }
    }
    return false
  }
  // 
  return help(root)
};