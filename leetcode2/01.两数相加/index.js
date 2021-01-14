/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }
  let carry = 0;
  let returnListNode = new ListNode(0);
  let head = returnListNode;

  while (l1 != null || l2 != null) {
    let x = (l1 === null) ? 0 : l1.val;
    let y = (l2 === null) ? 0 : l2.val;
    let sum = x + y + carry;
    carry = sum > 9 ? 1 : 0;
    returnListNode.next = new ListNode(sum % 10);
    returnListNode = returnListNode.next;
    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    returnListNode.next = new ListNode(carry)
  }
  return head.next;
}
let a1 = new ListNode(2)
a2 = new ListNode(4)
a3 = new ListNode(3)
let b1 = new ListNode(5)
b2 = new ListNode(6)
b3 = new ListNode(4)
a1.next = a2
a2.next = a3
b1.next = b2
b2.next = b3

console.log(a1, "===", b1)
console.log(addTwoNumbers(a1, b1))
// addTwoNumbers(a1, b1)