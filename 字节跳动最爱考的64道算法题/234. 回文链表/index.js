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
  if (!head) return true;
  // ? 1. 找到链表的中心，通过快慢指针
  const endOfFirstHalf = head => {
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  };
  // ? 2. 反转后半部分的链表
  const reverseList = head => {
    let pre = null;
    let cur = head;
    while (cur) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  };
  let firstHalfEnd = endOfFirstHalf(head);
  let secondHalfStart = reverseList(firstHalfEnd.next);
  // 3. 判断链表是否回文
  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (p2 !== null && result) {
    if (p1.val !== p2.val) {
      result = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  // 4. 恢复链表的后半部分
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};

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
  // ! 递归
  let left = head;
  const traverse = right => {
    if (!right) {
      return true;
    }
    let res = traverse(right.next);
    res = res && right.val === left.val;
    left = left.next;
    return res;
  };
  return traverse(head);
};
