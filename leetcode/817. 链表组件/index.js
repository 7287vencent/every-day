/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  // 哈希表
  let setArr = new Set(G);
  let cur = head;
  let ans = 0;
  while (cur !== null) {
    if (
      setArr.has(cur.val) &&
      (cur.next === null || !setArr.has(cur.next.val))
    ) {
      ans++;
    }
    cur = cur.next;
  }
  return ans;
};
