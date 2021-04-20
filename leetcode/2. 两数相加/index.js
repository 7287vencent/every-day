/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  let curry = 0;
  while (l1 || l2) {
    let c1 = (l1 && l1.val) || 0;
    let c2 = (l2 && l2.val) || 0;
    let sum = c1 + c2 + curry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    curry = (sum / 10) >> 0;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  if (curry > 0) {
    tail.next = new ListNode(curry);
  }
  return head;
};
