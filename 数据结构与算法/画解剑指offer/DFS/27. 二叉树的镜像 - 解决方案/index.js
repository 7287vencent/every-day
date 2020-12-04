/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// todo 方法一
var mirrorTree = function (root) {
  let res = null
  if (root !== null) {
    res = new TreeNode(root.val)
    res.left = mirrorTree(root.right)
    res.right = mirrorTree(root.left)
  }
  return res
};

// todo 方法二
// 递归 遍历 然后获取到
var mirrorTree = function (root) {
  if (root === null) return root;

  const temp = root.right;
  root.right = root.left;
  root.left = temp

  mirrorTree(root.left)
  mirrorTree(root.right)

  return root;

};