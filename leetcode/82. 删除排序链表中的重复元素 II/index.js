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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummy = {
    next: head,
  };
  let a = dummy;
  let b = head;
  while (b && b.next) {
    if (a.next.val !== b.next.val) {
      a = a.next;
      b = b.next;
    } else {
      while (b && b.next && a.next.val === b.next.val) {
        b = b.next;
      }
      a.next = b.next;
      b = b.next;
    }
  }
  return dummy.next;
};
