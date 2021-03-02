/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return head;
  let dummp = new ListNode(0);
  dummp.next = head;
  let pre = head;
  let cur = head.next;
  while (cur) {
    if (pre.val <= cur.val) {
      pre = pre.next;
    } else {
      let newHead = dummp;
      while (newHead.next.val <= cur.val) {
        newHead = newHead.next;
      }
      pre.next = cur.next;
      cur.next = newHead.next;
      newHead.next = cur;
    }
    cur = pre.next;
  }
  return dummp.next;
};
