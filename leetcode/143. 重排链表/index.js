/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 存储
  if (!head) {
    return head;
  }
  let node = [];
  let pos = head;
  let tmp = null;
  while (pos) {
    tmp = pos.next;
    pos.next = null;
    node.push(pos);
    pos = tmp;
  }
  let i = 0,
    j = node.length - 1;
  while (i < j) {
    node[i].next = node[j];
    i++;
    if (i === j) {
      break;
    }
    node[j].next = node[i];
    j--;
  }
  return node[0];
};
