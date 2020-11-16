function ListNode(val) {
  this.val = val
  this.next = null
}

var mergeTwoLists = function(l1, l2) {
  // 将节点放入数组,
  // sort 方法
  var ans = []
  while(l1) {
    ans.push(new ListNode(l1.val))
    l1 = l1.next
  }
  while(l2) {
    ans.push(new ListNode(l2.val))
    l2 = l2.next
  }
  // console.log(ans)
  ans.sort((a,b) => {
    return a.val - b.val
  })
  // console.log(ans)
  if(!ans.length) return null
  for(let i = 0, len = ans.length; i < len - 1; i++) {
    ans[i].next = ans[i+1]
  }
  // console.log(ans)
  // let node
    return ans[0]
};

var a1 = new ListNode(1)
var a2 = new ListNode(2)
var a3 = new ListNode(4)
var b1 = new ListNode(1)
var b2 = new ListNode(3)
var b3 = new ListNode(4)

a1.next = a2
a2.next = a3
b1.next = b2
b2.next = b3

var l3 = mergeTwoLists(a1,b1)
while(l3) {
  console.log(l3.next)
  l3=l3.next
}