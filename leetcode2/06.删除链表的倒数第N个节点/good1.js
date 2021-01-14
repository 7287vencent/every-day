/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let p = dummyHead
  let q = dummyHead

  for (let i = 0; i < n + 1; i++) {
    q = q.next
  }

  while (q) {
    p = p.next
    q = q.next
  }

  const delNode = p.next
  p.next = delNode.next

  return dummyHead.next
};