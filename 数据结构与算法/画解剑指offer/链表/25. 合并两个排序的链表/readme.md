## 题目 25. 合并两个排序的链表
#### 题目描述
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：
```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：
```
`0 <= 链表长度 <= 1000`


### 解题思路
#### 思路
`标签：链表、递归`
- 这道题可以使用递归实现，新链表也不需要构造新节点
- 终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
- 返回值：每一层调用都返回排序好的链表头
- 本级递归内容：如果 l1 的 val 值更小，则将 l1.next 与- 排序好的链表头相接，l2 同理
- O(m+n)，mm 为 l1 的长度，nn 为 l2 的长度
