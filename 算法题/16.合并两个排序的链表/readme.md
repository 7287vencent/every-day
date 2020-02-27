## 题目 16.合并两个排序的链表
  输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

### 解题思路
  - 递归版
    使用递归思路
  - 非递归版
  ```
    /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
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
  ```