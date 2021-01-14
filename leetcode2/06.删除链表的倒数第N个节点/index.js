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
  // let node1 = node2 = head
  let node1 = node2 = new ListNode()
  node1.next = node2.next = head
  while (n > 0) {
    node1 = node1.next
    n--
  }

  while (node1.next != null) {
    node1 = node1.next
    node2 = node2.next
  }
  if (node2.next == head) {
    head = head.next
    return head
  }
  node1 = node2.next
  node2.next = node1.next

  return head
};