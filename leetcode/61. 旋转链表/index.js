/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head;
  if (!head.next) return head;
  let old_head = head;
  let len = 1;
  while (old_head.next) {
    old_head = old_head.next;
    len++;
  }
  old_head.next = head;
  // 新的最后节点为 len - (k % len) - 1 即
  // 新的头为 len - k % len
  let new_head = head;
  for (let i = 0; i < len - (k % len) - 1; i++) {
    new_head = new_head.next;
  }
  head = new_head.next;
  new_head.next = null;
  return head;
};
