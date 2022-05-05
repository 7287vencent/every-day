### 题目 103. 二叉树的锯齿形层序遍历
#### 题目描述
给你二叉树的根节点 `root` ，返回其节点值的 **锯齿形层序遍历** 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

 

示例 1：

![img](103-1.jpeg)

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
```
示例 2：

```js
输入：root = [1]
输出：[[1]]
```
示例 3：

```js
输入：root = []
输出：[]
```
 

提示：

- 树中节点数目在范围 [0, 2000] 内
- -100 <= Node.val <= 100


### 解题思路
[官方题解](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/solution/er-cha-shu-de-ju-chi-xing-ceng-xu-bian-l-qsun/)