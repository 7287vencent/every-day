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

var mergeTwoLists = function(gl1, gl2) {
  // 都不存在，返回空节点
  let l1 = gl1, l2 = gl2;
  let pre = null;
  if (!gl1 && !gl2) {
      return null;
  }
  if (gl1 && gl2) {
      if (l1.val <= l2.val) {
          pre = l1;
          l1 = l1.next;
      }
      else {
          pre = l2;
          l2 = l2.next;
      }
  }
  if (!gl1) {
      pre = l2;
      l2 = l2.next;
  }
  if (!gl2) {
      pre = l1;
      l1 = l1.next;
  }
  pre.next = mergeTwoLists(l1, l2);
  return pre; 
};