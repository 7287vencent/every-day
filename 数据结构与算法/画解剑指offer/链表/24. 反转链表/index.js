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
// todo 方法一
var reverseList = function (head) {
  if (!head) return null
  let pre = head
  let cur = null
  while (pre !== null) {
    let temp = pre.next // 暂时记录下一个
    pre.next = cur // 连接上反转的头部
    cur = pre //  保证 cur 一定为头部
    pre = temp
  }
  return cur
};

// todo 方法二
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
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head
  }
  const current = reverseList(head.next);
  head.next.next = head;
  head.next = null
  return current;
};