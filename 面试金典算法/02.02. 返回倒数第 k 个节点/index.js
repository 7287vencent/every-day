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
 * @return {number}
 */
var kthToLast = function (head, k) {
  // 双指针解法
  // let last = head
  // while(k > 0) {
  //     last = last.next
  //     k--
  // }
  // while(last !== null) {
  //     last = last.next
  //     head = head.next
  // }
  // return head.val
  // 优化的双指针
  let res = head
  while (head) {
    k--
    if (k < 0) {
      res = res.next
    }
    head = head.next
  }
  return res.val
};