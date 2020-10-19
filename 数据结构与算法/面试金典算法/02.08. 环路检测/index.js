// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var detectCycle = function (head) {
//   if (!head || !head.next) {
//     return null
//   }
//   // 快慢指针
//   let fast = head
//   let slow = head
//   while (fast && fast.next) {
//     fast = fast.next.next
//     slow = slow.next
//     if (fast === slow) {
//       break
//     }
//   }
//   if (fast !== slow) {
//     return null
//   }
//   fast = head
//   while (slow !== fast) {
//     fast = fast.next
//     slow = slow.next
//   }
//   return slow
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let weakMap = new WeakMap();

  let cur = head;
  let count = 0;

  let resultIndex = -1;

  while (cur) {
    if (!weakMap.has(cur)) {
      weakMap.set(cur, count);
    } else {
      resultIndex = count;
      break;
    }

    cur = cur.next;

    count++;
  }

  return cur;
};
