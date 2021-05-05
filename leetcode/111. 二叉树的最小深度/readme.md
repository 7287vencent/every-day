### 题目 111. 二叉树的最小深度
#### 题目描述
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：

![img](111.jpeg)


```js
输入：root = [3,9,20,null,null,15,7]
输出：2
```
示例 2：

```js
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```
 

提示：

- `树中节点数的范围在 [0, 105] 内`
- `-1000 <= Node.val <= 1000`


### 解题思路
#### 方法一：BFS
[官方题解](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/solution/er-cha-shu-de-zui-xiao-shen-du-by-leetcode-solutio/)
