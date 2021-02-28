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
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  // ？快慢指针找 mid 节点
  const getMedian = (left, right) => {
      let fast = left
      let slow = left
      while(fast!== right && fast.next !== right) {
          fast = fast.next.next
          slow = slow.next
      }
      return slow
  }

  const buildTree = (left, right) => {
      if (left === right) {
          return null
      }
      let mid = getMedian(left, right)
      let root = new TreeNode(mid.val)
      root.left = buildTree(left, mid)
      root.right = buildTree(mid.next, right)
      return root
  }
  return buildTree(head, null)
};