/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (!head) {
    head = new Node(insertVal, null);
    head.next = head;
    return head;
  }
  let prev = head;
  let cur = head.next;
  let isInsert = false;
  do {
    if (prev.val <= insertVal && insertVal <= cur.val) {
      // todo 情况一
      isInsert = true;
    } else if (prev.val > cur.val) {
      if (prev.val <= insertVal || insertVal <= cur.val) {
        // todo 情况二
        isInsert = true;
      }
    }
    if (isInsert) {
      prev.next = new Node(insertVal, cur);
      return head;
    }
    prev = cur;
    cur = cur.next;
  } while (prev != head);
  // todo 情况三
  prev.next = new Node(insertVal, cur);
  return head;
};
