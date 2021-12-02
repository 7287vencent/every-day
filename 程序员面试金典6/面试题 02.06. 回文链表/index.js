/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let s1 = "";
  let s2 = "";
  let p = head;
  while (p) {
    s1 = s1 + p.val;
    s2 = p.val + s2;
    p = p.next;
  }
  return s1 === s2;
};
