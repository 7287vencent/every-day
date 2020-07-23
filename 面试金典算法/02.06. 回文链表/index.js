/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 字符串解法
  // let str1 = '';
  // let str2 = '';
  // let p = head;
  // while(p) {
  //     str1 = str1 + p.val;
  //     str2 = p.val + str2;
  //     p = p.next;
  // }
  // return str1 === str2;
  // 数组解法
//     const nums = []
//   while(head) {
//     nums.push(head.val)
//     head = head.next
//   }
//   let i = 0, j = nums.length - 1
//   while(i < j) {
//     if (nums[i++] !== nums[j--]) {
//       return false
//     }
//   }
//   // console.log(nums);
//   return true
  // 快慢 指针
let fast = head;
let slow = head;
let pre = null;
  // 找到中点
while(fast !== null && fast.next !== null) {
  fast = fast.next.next;
  slow = slow.next;
}
  // 反转链表
while(slow) {
  console.log(slow, pre)
  const node = slow.next;
  slow.next = pre;
  pre = slow;
  slow = node;
}

while(head && pre) {
  if (head.val !== pre.val) {
    return false;
  }

  head = head.next;
  pre = pre.next;
}

return true;


};