/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
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
  let cur = 0;
  let ans = null;
  while (s1.length || s2.length || cur) {
    let v1 = s1.length ? s1.pop() : 0;
    let v2 = s2.length ? s2.pop() : 0;
    let v = (v1 + v2 + cur) % 10;
    cur = v1 + v2 + cur >= 10 ? 1 : 0;
    let node = new ListNode(v);
    node.next = ans;
    ans = node;
  }
  return ans;
};
