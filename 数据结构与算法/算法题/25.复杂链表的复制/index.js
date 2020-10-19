/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone (pHead) {
  // write code here
  if (pHead === null) return null

  let newnode = new RandomListNode(pHead.label)
  newnode.random = pHead.random
  newnode.next = Clone(pHead.next)
  return newnode
}