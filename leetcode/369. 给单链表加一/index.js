/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function (head) {
  // 1. 建立哨兵节点
  let sentinel = new ListNode(0);
  sentinel.next = head;
  let cur = sentinel;
  // 2. 找到最右边值不为9的节点
  while (head !== null) {
    if (head.val !== 9) cur = head;
    head = head.next;
  }
  // 3. 该节点 值加1
  cur.val++;
  cur = cur.next;
  // 4. 该节点后面的值全部变成 0
  while (cur !== null) {
    cur.val = 0;
    cur = cur.next;
  }
  // 5. 如果 哨兵的值为1，就返回哨兵，否则返回 next
  return sentinel.val === 1 ? sentinel : sentinel.next;
};
