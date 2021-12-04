/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }
  if (fast !== slow) {
    return null;
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
