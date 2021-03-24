/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let pre1 = list1;
  let pre2 = list1;
  let i = 0;
  while (b > 0) {
    if (i !== a - 1) {
      pre1 = pre1.next;
      i++;
    }
    pre2 = pre2.next;
    b--;
  }
  pre2 = pre2.next;
  let pre3 = list2;
  while (pre3.next !== null) {
    pre3 = pre3.next;
  }
  pre1.next = list2;
  pre3.next = pre2;
  return list1;
};
