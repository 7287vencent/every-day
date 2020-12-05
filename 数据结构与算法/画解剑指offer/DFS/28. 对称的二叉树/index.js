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
var isSymmetric = function (root) {

  function isMirror (t1, t2) {
    if (t1 === null && t2 === null) return true
    if (t1 === null || t2 === null) return false
    // todo t1 左子树 与 t2 友子树比较
    return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
  }

  return isMirror(root, root)
};


// todo 方法二
var isSymmetric = function (root) {
  if (!root) return true

  function fn (left, right) {
    if (!left && !right) return true
    if (!left || !right) return false

    if (left.val === right.val) {
      return (fn(left.left, right.right) && fn(left.right, right.left))
    } else {
      return false
    }

  }

  return fn(root.left, root.right)
};