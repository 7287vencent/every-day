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
var reversePrint = function (head) {
  let stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  // 这里有两种解决方法
  // ? 第一种 直接reverse 数组
  // return stack.reverse();
  // ? 第二种 从栈中push出结果
  let res = [];
  while (stack.length) {
    res.push(stack.pop());
  }
  return res;
};
