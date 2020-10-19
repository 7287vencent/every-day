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
  let head = new ListNode(0)
  let p = head
  let pos = 0 // 进位
  let val // 当前值
  while (l1 || l2 || pos) {
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + pos
    // 是否 ? 10
    pos = val >= 10 ? 1 : 0
    val = val >= 10 ? val - 10 : val
    p.next = new ListNode(val)
    p = p.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    // if (!l1 && !l2 && !pos) {
    //     break
    // }
  }

  return head.next
};

// 进阶 先开辟两个栈 然后通过while 循环，把两个链表中的值全部存入栈中，接下来的算法就和当前的思路一样
