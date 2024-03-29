### 题目 83. 删除排序链表中的重复元素
#### 题目描述
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

```js
输入: 1->1->2
输出: 1->2
```
示例 2:

```js
输入: 1->1->2->3->3
输出: 1->2->3

```
### 解题思路
#### 方法：直接法
[官方题解](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/solution/shan-chu-pai-xu-lian-biao-zhong-de-zhong-fu-yuan-s/)
- 由于输入的列表已排序，因此我们可以通过将结点的值与它之后的结点进行比较来确定它是否为重复结点。如果它是重复的，我们更改当前结点的 next 指针，以便它跳过下一个结点并直接指向下一个结点之后的结点。