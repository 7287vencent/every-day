/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head
  // 双指针 
  let pre = head
  let cur = head
  while (cur) {
    if (cur.val < x) {
      // cur 和 pre 的值交换
      let temp = cur.val
      cur.val = pre.val
      pre.val = temp
      pre = pre.next
    }
    cur = cur.next
  }
  return head
};