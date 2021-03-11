/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let cur = head;
  let ans = 0;
  while (cur !== null) {
    ans = ans * 2 + cur.val;
    cur = cur.next;
  }
  return ans;
};
``