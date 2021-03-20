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
// todo 快慢指针
var deleteNodes = function (head, m, n) {
  let dump = new ListNode(0);
  dump.next = head;
  let pre = dump;
  let cur = head;
  let pm = m;
  let pn = n;
  while (cur !== null) {
    while (cur && pm > 0) {
      pre = cur;
      cur = cur.next;
      pm--;
    }
    while (cur && pn > 0) {
      cur = cur.next;
      pn--;
    }
    pre.next = cur;
    pm = m;
    pn = n;
  }
  return dump.next;
};

// todo 另一种方法
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
var deleteNodes = function (head, m, n) {
  let node = new ListNode(0);
  let temp = node;
  let index = 0;
  while (head !== null) {
    if (index % (m + n) < m) {
      temp.next = new ListNode(head.val);
      temp = temp.next;
    }
    head = head.next;
    index++;
    if (index === m + n) {
      index = 0;
    }
  }
  return node.next;
};
// 2,3

// 1, 2
// 3, 4, 5
// 6,7
// 8, 9,10
