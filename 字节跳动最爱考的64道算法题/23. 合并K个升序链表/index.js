/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const merge = (l1, l2) => {
  if (l1 === null && l2 === null) return null;
  if (!l1 && l2) return l2;
  if (l1 && !l2) return l1;
  let dump = {
    next: null,
  };
  let cur = dump;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  l1 && (cur.next = l1);
  l2 && (cur.next = l2);
  return dump.next;
};
const mergeArr = lists => {
  if (lists.length <= 1) {
    return lists[0];
  }
  let index = (lists.length / 2) >> 0;
  let left = mergeArr(lists.slice(0, index));
  let right = mergeArr(lists.slice(index));
  return merge(left, right);
};
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  return mergeArr(lists);
};
