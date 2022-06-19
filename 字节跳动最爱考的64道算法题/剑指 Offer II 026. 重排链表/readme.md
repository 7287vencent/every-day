### 题目 剑指 Offer II 026. 重排链表
#### 题目描述
给定一个单链表 `L` 的头节点 `head` ，单链表 `L` 表示为：

` L0 → L1 → … → Ln-1 → Ln `
请将其重新排列后变为：

`L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …`

不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1:

![img](026-1.png)

```js
输入: head = [1,2,3,4]
输出: [1,4,2,3]
```
示例 2:

![img](026-2.png)

```js
输入: head = [1,2,3,4,5]
输出: [1,5,2,4,3]
```
 

提示：

- 链表的长度范围为 [1, 5 * 104]
- 1 <= node.val <= 1000

### 解题思路
[官方题解](https://leetcode.cn/problems/LGjMqU/solution/zhong-pai-lian-biao-by-leetcode-solution-wm25/)