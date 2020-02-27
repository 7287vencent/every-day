/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge (pHead1, pHead2) {
  // write code here
  let tmp = new ListNode(0)
  let phead = tmp
  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
      tmp.next = pHead1
      pHead1 = pHead1.next
    } else {
      tmp.next = pHead2
      pHead2 = pHead2.next
    }
    tmp = tmp.next
  }
  // 如果链表有剩余
  if (pHead1 === null) {
    tmp.next = pHead2
  }
  if (pHead2 === null) {
    tmp.next = pHead1
  }
  return phead.next
}