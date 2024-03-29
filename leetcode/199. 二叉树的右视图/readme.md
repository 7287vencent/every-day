### 题目 199. 二叉树的右视图
#### 题目描述
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

```js
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```


### 解题思路
[参考题解](https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/jian-dan-bfsdfs-bi-xu-miao-dong-by-sweetiee/)
#### 方法二：DFS （时间100%）
- 思路： 我们按照 「根结点 -> 右子树 -> 左子树」 的顺序访问，就可以保证每层都是最先访问最右边的节点的。

- 与先序遍历 「根结点 -> 左子树 -> 右子树」 正好相反，先序遍历每层最先访问的是最左边的节点）

- 时间复杂度： `O(N)`，每个节点都访问了 1 次。
- 空间复杂度： `O(N)`，因为这不是一棵平衡二叉树，二叉树的深度最少是 `logN`, 最坏的情况下会退化成一条链表，深度就是 `N`，因此递归时使用的栈空间是 `O(N)` 的。