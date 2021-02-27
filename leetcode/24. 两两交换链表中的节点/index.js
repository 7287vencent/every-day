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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dump = {
    next: head,
  };
  let temp = dump;
  while (temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = temp.next.next;
    node1.next = node2.next;
    node2.next = node1;
    temp.next = node2;
    temp = node1;
  }
  return dump.next;
};
