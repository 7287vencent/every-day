/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let pre = (i = 0);
  const build = stop => {
    if (inorder[i] === stop) {
      return null;
    }
    let root = new TreeNode(preorder[pre++]);
    root.left = build(root.val);
    i++;
    root.right = build(stop);
    return root;
  };
  return build();
};
