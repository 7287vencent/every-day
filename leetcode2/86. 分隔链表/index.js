/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let cur = head,
      next,
      preHead,
      preTail,
      afterHead,
      afterTail
    // 如果head 没有，就是代表传入的链表为null
    if(head === null) {
      return null
    }
    
    // 循环遍历每个节点
    while (cur) {
      next = cur.next
      cur.next = null
      // 当前节点值小于 x 就放入 pre 链表中
      if (cur.val < x) {
        if (!preHead) {
          preHead = cur
          preTail = cur
        } else {
          preTail.next = cur
          preTail = cur
        }
      } else {
        // 大于就放入 after 链表中
        if (!afterHead) {
          afterHead = cur
          afterTail = cur
        } else {
          afterTail.next = cur
          afterTail = cur
        }
      }
      // 判断下一个节点
      cur = next
    } 
    // 如果pre 节点存在，就把 after 节点加在后面
    if (preHead) {
      preTail.next = afterHead
      return preHead || []
    } else {
      return afterHead || []
    }
};