/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const dfs = (head, node) => {
  if (head === null) return true;
  if (node === null) return false;
  if (node.val !== head.val) return false;
  return dfs(head.next, node.left) || dfs(head.next, node.right);
};
var isSubPath = function (head, root) {
  if (root === null) {
    return false;
  }
  return (
    dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );
};
