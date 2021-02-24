### 题目 92. 反转链表 II
#### 题目描述
反转从位置 `m` 到 `n` 的链表。请使用一趟扫描完成反转。

说明:
`1 ≤ m ≤ n ≤ 链表长度。`

示例:

- `输入: 1->2->3->4->5->NULL, m = 2, n = 4`
- `输出: 1->4->3->2->5->NULL`

### 解题思路
[官方题解](https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode/)
#### 方法一：迭代+直接
- 分清楚四个边界，m - n 之间的链表直接反转
- 加上一个虚拟节点处理 m = 1 时的特殊情况
  