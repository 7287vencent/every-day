/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */ // todo 勉强版
var getKthFromEnd = function (head, k) {
  if (!head) return null
  let pre = head
  let cur = head
  while (k--) {
    cur = cur.next
  }
  while (cur !== null) {
    pre = pre.next
    cur = cur.next
  }
  return pre
};

// todo 优秀的 快慢指针
var getKthFromEnd = function (head, k) {
  let fast = head;
  while (fast !== null) {
    fast = fast.next;
    if (k === 0) {
      head = head.next;
    } else {
      k--;
    }
  }
  return head;
};