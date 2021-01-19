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
// todo 哈希模式
var detectCycle = function (head) {
  let hash = new Set();
  while (head) {
    if (hash.has(head)) {
      return head;
    }
    hash.add(head);
    head = head.next;
  }
  return null;
};

// todo 快慢指针
var detectCycle = function (head) {
  let fast = head;
  let prev = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      while (slow !== prev) {
        slow = slow.next;
        prev = prev.next;
      }
      return prev;
    }
  }
  return null;
};
