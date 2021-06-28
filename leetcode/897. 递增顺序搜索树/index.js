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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummyNode = new TreeNode(-1);
  let curNode = dummyNode;
  const inorder = root => {
    if (!root) {
      return null;
    }
    inorder(root.left);
    curNode.right = root;
    root.left = null;
    curNode = curNode.right;
    inorder(root.right);
  };
  inorder(root);
  return dummyNode.right;
};
