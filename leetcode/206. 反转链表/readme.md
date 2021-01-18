### 题目 206. 反转链表
#### 题目描述
反转一个单链表。

示例:
```js
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```
进阶:
`你可以迭代或递归地反转链表。你能否用两种方法解决这道题？`

### 解题思路
[官方题解](https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/)
#### 方法一：迭代
1. 假设 1 -> 2 -> 3 -> null ,反转之后就变成 null <- 1 <- 2 <- 3，是不是有点思路？
2. 遍历链表的时候，使用一个节点`prev`,保存上一个节点，使用一个节点 `next`保存下一个节点
3. 假设当前节点为 `curr`, 那么只需要修改 `curr.next = prev`, `prev = curr, curr = next`
#### 复杂度分析
- 时间复杂度：O(n)，其中 nn 是链表的长度。需要遍历链表一次。
- 空间复杂度：O(1)。

#### 方法二：递归
递归方法请看官方题解