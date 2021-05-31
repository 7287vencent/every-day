/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let post_i = postorder.length - 1;
  let map = new Map();
  const helper = (left, right) => {
    if (left > right) {
      return null;
    }
    let root_val = postorder[post_i];
    let root = new TreeNode(root_val);
    let index = map.get(root_val);

    post_i--;

    root.right = helper(index + 1, right);
    root.left = helper(left, index - 1);
    return root;
  };
  inorder.forEach((val, i) => {
    map.set(val, i);
  });
  return helper(0, inorder.length - 1);
};
