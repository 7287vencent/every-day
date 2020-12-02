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
// todo 递归解法
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};


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
// todo 非递归解法
var mergeTwoLists = function (l1, l2) {
  let newList = tmp = node = null

  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  while (l1 || l2) {
    if (!l1 || l2 && l1.val > l2.val) {
      node = new ListNode(l2.val)
      l2 = l2.next
    } else {
      node = new ListNode(l1.val)
      l1 = l1.next
    }

    if (!newList) {
      newList = tmp = node
      continue
    }

    tmp.next = node
    tmp = tmp.next
  }

  return newList
};