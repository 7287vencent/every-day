/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 栈
  let s1 = [];
  let s2 = [];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  // ?
  let curry = 0;
  let ans = null;
  while (s1.length || s2.length || curry !== 0) {
    let a = s1.length ? s1.pop() : 0;
    let b = s2.length ? s2.pop() : 0;
    let cur = a + b + curry;
    curry = (cur / 10) >> 0;
    cur = cur % 10;
    let node = new ListNode(cur);
    node.next = ans;
    ans = node;
  }
  return ans;
};
