/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) return null
  if (head.val === val) return head.next
  let pre = head
  let pos = head.next // 下一个节点
  while (pos !== null && pos.val !== val) {
    pre = pos
    pos = pos.next
  }
  if (pos !== null) {
    pre.next = pos.next
  }
  return head
};

// todo 简洁版
var deleteNode = function (head, val) {
  if (!head) return null
  if (head.val === val) return head.next
  let pre = head;
  let cur = head.next;
  while (cur != null) {
    if (cur.val === val) {
      pre.next = cur.next;
      break;
    }
    pre = cur;
    cur = cur.next;
  }
  return head;
};