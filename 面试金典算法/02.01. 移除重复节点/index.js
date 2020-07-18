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
  if (!head) return head
  let arr = []
  arr.push(head.val)
  let pre = head
  let cur = head.next
  while (cur !== null) {
    // 不存在
    if (arr.indexOf(cur.val) === -1) {
      arr.push(cur.val)
      pre = pre.next
      cur = cur.next
    } else {
      // 存在 删除 当前 cur 的节点
      pre.next = cur.next
      cur = cur.next
    }
  }
  return head
};