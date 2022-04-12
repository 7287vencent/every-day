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
var reverseList = function (head) {
  // ? 递归的写法
  // if (!head || !head.next) {
  //     return head
  // }
  // let newHead = reverseList(head.next)
  // head.next.next = head
  // head.next = null
  // return newHead
  // ? 非递归的写法
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
