## 题目 01.两数相加
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807


### 解题思路
  1. 先容错 l1 = null 返回 l2
     1. l2 = null 返回 l1
  2. 定义 一个 carry 表示增加 的 1
  3. 新建一个链表头 result head
  4. 循环输入的 链表 l1, l2
  5. 先获取li,l2 的val 值并 和 carry 相加 为 sum
  6. 判断 sum 是否大于等于 10 , true carry = 1 false 0
  7. 让 result.next = new listnode(sum % 10) 
  8. result = result.next
  9. 判断 l1 l2 是否为 null ，不是的话就 next
  10. 跳出循环 
  11. 判断 carry 是否大于 0 是，就 result.nexr = new listnode(carry)
  12. 最后返回 head.next
   