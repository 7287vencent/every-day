/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = new ListNode(0);
  let res = fast;
  fast.next = head;
  let slow = head;
  while (n > 0) {
    slow = slow.next;
    n--;
  }
  while (slow) {
    slow = slow.next;
    fast = fast.next;
  }
  fast.next = fast.next.next;
  return res.next;
};
