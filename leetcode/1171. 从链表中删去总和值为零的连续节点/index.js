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
var removeZeroSumSublists = function (head) {
  let dump = new ListNode(0);
  dump.next = head;
  let sum = 0;
  let cur = dump;
  let map = {}; // ? 使用hash 存储链表的前缀合
  while (cur) {
    sum += cur.val;
    map[sum] = cur; //? 多个相同的前缀和，覆盖即可
    cur = cur.next;
  }
  sum = 0;
  cur = dump;
  // ? 如果两个节点的前缀和一样，那么说明中间的节点是无效的，直接删除即可。(即 ( ] 后面相同的节点删除)
  while (cur) {
    sum += cur.val;
    cur.next = map[sum].next;
    cur = cur.next;
  }
  return dump.next;
};
