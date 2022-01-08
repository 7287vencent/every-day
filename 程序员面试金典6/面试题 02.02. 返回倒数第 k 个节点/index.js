/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  // ? 双指针
  let last = head;
  while (k > 0) {
    last = last.next;
    k--;
  }
  while (last) {
    last = last.next;
    head = head.next;
  }
  return head.val;
};
