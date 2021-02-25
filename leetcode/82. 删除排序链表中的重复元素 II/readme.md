### 题目 82. 删除排序链表中的重复元素 II
#### 题目描述
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

```js
输入: 1->2->3->3->4->4->5
输出: 1->2->5
```
示例 2:

```js
输入: 1->1->1->2->3
输出: 2->3
```

### 解题思路
[推荐题解](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/san-chong-jie-fa-duo-tu-zhan-shi-82-shan-chu-pai-x/)
#### 方法一：迭代 + 双指针
- 自己先画一个图
- 使用一个虚拟的头节点, `a` 指向它， `b` 指向 `head`
- 迭代 `b` 节点
  - 当 `a.next.val !== b.next.val`时, `a, b`同时指向下个一节点
  - 否则，这种情况下，a.next 和 b.next 的值相等,是需要删除的节点
  - 迭代b，找出多有的等值节点
  - 然后修改 a.next 和 b.next
- 最后返回 虚拟节点.next(因为 head 可能也被删除了)