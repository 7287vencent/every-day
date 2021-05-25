### 题目 113. 路径总和 II
#### 题目描述
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

 

示例 1：

![img](113-1.jpeg)

```js
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```
示例 2：

![img](113-2.jpeg)

```js
输入：root = [1,2,3], targetSum = 5
输出：[]
```
示例 3：

```js
输入：root = [1,2], targetSum = 0
输出：[]
```
 

提示：

- 树中节点总数在范围 [0, 5000] 内
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000

### 解题思路
[官方题解](https://leetcode-cn.com/problems/path-sum-ii/solution/lu-jing-zong-he-ii-by-leetcode-solution/)
#### 方法一：回溯 + dfs

我们可以采用深度优先搜索的方式，枚举每一条从根节点到叶子节点的路径。当我们遍历到叶子节点，且此时路径和恰为目标和时，我们就找到了一条满足条件的路径。