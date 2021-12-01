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
var removeDuplicateNodes = function (head) {
  if (!head) {
    return head;
  }
  let obj = {};
  let pre = head;
  let cur = head.next;
  obj[head.val] = true;
  while (cur) {
    if (cur.val in obj) {
      // ? 存在
      pre.next = cur.next;
      cur = cur.next;
    } else {
      // ? 不存在
      obj[cur.val] = true;
      pre = cur;
      cur = cur.next;
    }
  }
  return head;
};
