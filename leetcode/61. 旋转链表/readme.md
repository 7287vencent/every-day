### 题目 61. 旋转链表
#### 题目描述
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

```js
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
```
示例 2:

```js
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
```
### 解题思路
#### 方法一：直觉法
[官方题解](https://leetcode-cn.com/problems/rotate-list/solution/xuan-zhuan-lian-biao-by-leetcode/)
- 先计算出链表的长度
- 然后找到链表的倒数第 k + 1个节点
- 按题目要求断开就行

#### 如何找到 倒数第 k + 1个节点
>长度n，旋转k，每n次旋转就回到原位置了，所以求余数旋转就够了，n-k%n就是旋转之后new head位置，那么n-k%n-1就是新尾巴的位置，因为我们知道链表的头head，又是个环，所以根据head去找new tail，从head位置0找到新的尾巴就是range（0，n-k%n-1），也就是.next循环了n-k%n-1次