/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge (pHead1, pHead2) {
  // write code here
  let result = null
  if (pHead1 === null) {
    return pHead2;
  } else if (pHead2 === null) {
    return pHead1;
  }

  if (pHead1.val <= pHead2.val) {
    result = pHead1
    result.next = Merge(pHead1.next, pHead2)
  } else {
    result = pHead2
    result.next = Merge(pHead1, pHead2.next)
  }
  return result
}