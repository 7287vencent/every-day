function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead)
{
  // write code here
   
  if(pHead==null){
      return null;
  };
  var cur=pHead;
  var tmp,pNewHead=null;
  while(cur){
      tmp=new RandomListNode(cur.label);
      tmp.next=cur.next;
      cur.next=tmp;
      cur=cur.next.next;
  };
  cur=pHead;
  while(cur){
      if(cur.random){
          cur.next.random = cur.random.next;
      };
      cur=cur.next.next;
  };
  pNewHead=pHead.next;
  cur=pHead;
  var clone;
  while(cur){
      clone=cur.next;
      cur.next=clone.next;
      clone.next=(clone.next==null?null:clone.next.next);
      cur=cur.next;
  };
  return pNewHead
}
