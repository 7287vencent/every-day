/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let stack = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  let res = []
  for (let i = 0, len = stack.length; i < len; i++) {
    res.push(stack.pop())
  }
  return res
};