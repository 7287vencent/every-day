/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  // 在头节点前添加哑节点避免越界且允许了头节点的交换
  let dump = new ListNode(0, head);
  let pre = dump;
  let fast = dump;
  let slow = dump;
  // 快指针先行，找到正数第 K 个节点
  while (k--) {
    pre = pre.next;
    fast = fast.next;
  }
  // 快慢指针同行，当快指针走到底时，慢指针即走到了倒数第k个节点
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  // 交换两个节点的值
  let temp = pre.val;
  pre.val = slow.val;
  slow.val = temp;
  // 返回 head
  return head;
};
