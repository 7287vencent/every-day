/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail (head, k) {
  let arr = []
  while (head != null) {
    arr.push(head)
    head = head.next
  }
  return arr[arr.length - k]
}