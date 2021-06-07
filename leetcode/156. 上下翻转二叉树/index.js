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
var upsideDownBinaryTree = function (root) {
  let father = null; // ? 存储父节点
  let right = null; // ? 存储兄弟节点
  while (root) {
    // ? 记录当前节点的左节点
    let left = root.left;
    // ? 更新当前节点的左节点为，相同父节点的兄弟节点
    root.left = right;
    // ? 存储当前节点的右节点，方便下次循环使用
    right = root.right;
    // ? 更新当前节点的右节点为，父节点
    root.right = father;
    // ? 更新相关信息
    father = root;
    root = left;
  }
  return father;
};
