## 题目 55 - I. 二叉树的深度
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，
``` js
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。

提示：

`节点总数 <= 10000`


### 解题思路
#### 思路
`标签：树的深度遍历`
- 整体思路：二叉树的最大高度，是由其左子树最大高度和右子树的最大高度中取最大值 + 根节点高度 1 计算出来的
- 时间复杂度：O(n)，空间复杂度：O(1)
#### 算法流程
- 终止条件：root 节点为 null 时，返回高度为 0
- 求出左子树最大高度、右子树最大高度
- 计算左子树和右子树高度的最大值
- 将上一步的最大值 + 根节点高度 1
