/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA
  let curB = headB

  while (curA !== curB) {
    curA = curA ? curA.next : headB
    curB = curB ? curB.next : headA
  }

  return curA
};