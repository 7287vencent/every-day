### 题目 234. 回文链表
#### 题目描述
请判断一个链表是否为回文链表。

示例 1:

```js
输入: 1->2
输出: false
```
示例 2:

```js
输入: 1->2->2->1
输出: true
```
进阶：
`你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？`


### 解题思路
[官方题解](https://leetcode-cn.com/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-leetcode-solution/)
#### 方法一：快慢指针
1. 通过快慢指针找到链表的中心节点
2. 反转链表的后半部分
3. 判断链表是否回文
4. 恢复链表后半部分
5. 返回结果