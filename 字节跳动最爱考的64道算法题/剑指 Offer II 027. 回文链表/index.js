/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let pre = head;
  const dfs = cur => {
    if (cur) {
      if (!dfs(cur.next)) {
        return false;
      }
      if (cur.val !== pre.val) {
        return false;
      }
      pre = pre.next;
    }
    return true;
  };
  return dfs(head);
};
