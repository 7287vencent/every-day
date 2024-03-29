### 题目 109. 有序链表转换二叉搜索树
#### 题目描述
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 `1。`

示例:

给定的有序链表： `[-10, -3, 0, 5, 9]`,

一个可能的答案是：`[0, -3, 9, -10, null, 5]`, 它可以表示下面这个高度平衡二叉搜索树：

```js
      0
     / \
   -3   9
   /   /
 -10  5
```

### 解题思路
[参考题解](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/solution/you-xu-lian-biao-zhuan-huan-er-cha-sou-suo-shu-1-3/)
#### 方法一：分治
- 和 108 题的解题和方法基本一样
- 找到链表的中心节点为 `root`
- 链表的左边为 `root.left`
- 链表的右边为 `root.right`
- 找中心节点的方法是通过 快慢指针实现的
  