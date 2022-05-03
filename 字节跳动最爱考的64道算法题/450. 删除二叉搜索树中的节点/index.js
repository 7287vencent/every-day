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
 * @param {number} key
 * @return {TreeNode}
 */
const successor = root => {
  root = root.right;
  while (root.left) root = root.left;
  return root.val;
};
const predecessor = root => {
  root = root.left;
  while (root.right) root = root.right;
  return root.val;
};
var deleteNode = function (root, key) {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    // ? 叶子节点，直接删除
    if (!root.left && !root.right) root = null;
    // ? 存在右节点，把后继节点替换为当前节点
    else if (root.right) {
      root.val = successor(root);
      // ? 同理，删除的是后继节点
      root.right = deleteNode(root.right, root.val);
    } else {
      // ? 存在左子树
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};
