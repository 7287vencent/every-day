/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;
  let dump = new Node(0, null, head, null);
  let pre = dump;
  let cur = null;
  let stack = [head];
  while (stack.length > 0) {
    cur = stack.pop();
    pre.next = cur;
    cur.prev = pre;
    if (cur.next !== null) {
      stack.push(cur.next);
    }
    if (cur.child !== null) {
      stack.push(cur.child);
      // ? 不要忘记断掉 child，因为最后返回的是一个单链表
      cur.child = null;
    }
    pre = cur;
  }
  // 不要忘记断掉 head 的 prev
  dump.next.prev = null;
  return dump.next;
};
