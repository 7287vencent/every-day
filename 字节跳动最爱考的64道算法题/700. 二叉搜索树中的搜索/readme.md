### 题目 700. 二叉搜索树中的搜索
#### 题目描述
给定二叉搜索树（`BST`）的根节点 `root` 和一个整数值 `val`。

你需要在 `BST` 中找到节点值等于 `val` 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 `null` 。

 

示例 1:

![img](700-1.jpeg)

```js
输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
```
Example 2:

![img](700-2.jpeg)

```js
输入：root = [4,2,7,1,3], val = 5
输出：[]
```
 

提示：

- 数中节点数在 [1, 5000] 范围内
- 1 <= Node.val <= 107
- root 是二叉搜索树
- 1 <= val <= 107
### 解题思路
[官方题解](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/solution/er-cha-sou-suo-shu-zhong-de-sou-suo-by-l-d8zi/)