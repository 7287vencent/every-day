/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) {
    return null;
  }
  let cur = head;
  let pre = null;
  while (m > 1) {
    pre = cur;
    cur = cur.next;
    m--;
    n--;
  }
  // con 记录的是 m的前一个节点
  // tail 记录的是 n 的位置
  let con = pre;
  let tail = cur;
  // 反转链表的套路
  while (n > 0) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    n--;
  }
  // 当 m = 1 时，会出现边界的问题
  if (con !== null) {
    con.next = pre;
  } else {
    head = pre;
  }
  tail.next = cur;
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// todo 优化版
var reverseBetween = function (head, m, n) {
  let count = n - m;
  let p = (dummyHead = new ListNode());
  let pre, cur, tail, front;
  p.next = head;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  front = p;
  pre = tail = p.next;
  cur = pre.next;
  for (let i = 0; i < count; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  front.next = pre;
  tail.next = cur;
  return dummyHead.next;
};
