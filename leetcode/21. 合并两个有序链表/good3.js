/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
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
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
      return l2;
  }
  if (!l2) {
      return l1;
  }

  let res = {};
  let prevP = null;
  let p = res;

  while(l1) {
      while (l2 && l2.val <= l1.val) {
          p.val = l2.val;
          p.next = {};
          prevP = p;
          p = p.next;

          l2 = l2.next;
      }

      p.val = l1.val;
      p.next = {};
      prevP = p;
      p = p.next;

      l1 = l1.next;
  }

  prevP.next = l2;

  return res;
};

console.log(JSON.stringify(mergeTwoLists({"val":1,"next":{val: 2, next:{val:4, next:null}}}, 
{"val":1,"next":{val: 3, next:{val:4, next:null}}})));
