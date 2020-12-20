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
  if (!head) return head
  // 先拷贝一份
  let cur = head
  let map = new Map()
  while (cur) {
    map.set(cur, new Node(cur.val))
    cur = cur.next
  }
  cur = head
  while (cur) {
    map.get(cur).next = map.get(cur.next) || null
    map.get(cur).random = map.get(cur.random) || null
    cur = cur.next
  }
  return map.get(head)
};