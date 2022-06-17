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
// todo 迭代
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// todo 递归
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
