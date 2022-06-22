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
  const node = new Node(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }
  if (head.next === head) {
    head.next = node;
    node.next = head;
    return head;
  }
  let cur = head,
    next = head.next;
  while (next !== head) {
    if (insertVal >= cur.val && insertVal <= next.val) {
      break;
    }
    // ? 拐角处
    if (cur.val > next.val) {
      if (insertVal > cur.val || insertVal < next.val) {
        break;
      }
    }
    cur = cur.next;
    next = next.next;
  }
  cur.next = node;
  node.next = next;
  return head;
};
