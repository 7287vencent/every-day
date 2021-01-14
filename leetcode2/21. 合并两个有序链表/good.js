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
// const create = (...nodeValues) => {
//   let head = null;
//   for (let val of nodeValues.reverse()) {
//     let node = new ListNode(val);
//     node.next = head;
//     head = node;
//   }
//   return head;
// }
// const mergeTwoLists = (l1, l2) => {
//   let values = []
//   while(l1 && l2) {
//     if(l1.val > l2.val) {
//       values.push(l2.val)
//       l2 = l2.next;
//     } else {
//       values.push(l1.val);
//       l1 = l1.next
//     }
//   }
//   if(l1) {
//     while(l1) {
//       values.push(l1.val);
//       l1 = l1.next;
//     }
//   }
//   if (l2) {
//     while (l2) {
//       values.push(l2.val);
//       l2 = l2.next;
//     }
//   }
//   return create(...values)
// }

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode();
  let current = head;
  while(l1 && l2) {
    if(l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1; 
      l1 = l1.next
    }
    current = current.next;
  }
  current.next = l1 || l2
  return head.next;
}