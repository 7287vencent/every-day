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
  if (!head.next) return null
  var node = head
  var list = []
  while (node) {
    list.push(node)
    node = node.next
  }
  var temp = {
    val: 0,
    next: head
  }
  list.unshift(temp)
  list[list.length - 1 - n].next = list[list.length - n + 1]
  return temp.next
};