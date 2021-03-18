/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  let stack = [];
  let res = Array(list.length).fill(0);
  for (let i = 0; i < list.length; i++) {
    while (stack.length > 0 && list[stack[stack.length - 1]] < list[i]) {
      let index = stack.pop();
      res[index] = list[i];
    }
    stack.push(i);
  }
  return res;
};
