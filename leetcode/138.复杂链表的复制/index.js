/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map();
  const dfs = head => {
    if (head === null) {
      return head;
    }
    if (map.has(head)) {
      return map.get(head);
    }
    const copy = new Node(head.val, null, null);
    map.set(head, copy);
    copy.next = dfs(head.next);
    copy.random = dfs(head.random);

    return copy;
  };
  return dfs(head);
};
