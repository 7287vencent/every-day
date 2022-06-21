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
  const dfs = node => {
    let cur = node;
    let last = null;
    while (cur) {
      let next = cur.next;
      if (cur.child) {
        let child = dfs(cur.child);
        next = cur.next;
        // ? 处理 cur 和 child
        cur.next = cur.child;
        cur.child.prev = cur;
        // ? 处理 last 和 next
        if (next !== null) {
          child.next = next;
          next.prev = child;
        }
        // ? cu.child
        cur.child = null;
        last = child;
      } else {
        last = cur;
      }
      cur = next;
    }
    return last;
  };

  dfs(head);
  return head;
};
