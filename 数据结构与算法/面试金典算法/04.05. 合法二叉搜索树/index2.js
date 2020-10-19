/**
 * 借鉴了目前点赞最高的思想：二叉搜索树的中序遍历结果必然是一个递增数列，且不会有重复的节点值
 */

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
  let res = []

  function pushNode (node) {
    if (node != null) {
      if (node.left != null) {
        pushNode(node.left)
      }
      res.push(node.val)
      if (node.right != null) {
        pushNode(node.right)
      }
    }
  }
  pushNode(root)

  return res.toString() === Array.from(new Set(res)).sort((a, b) => a - b).toString();
};