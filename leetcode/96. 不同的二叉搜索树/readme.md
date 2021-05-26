### 题目 96. 不同的二叉搜索树
#### 题目描述
给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

 

示例 1：

![img](96.jpeg)

```js
输入：n = 3
输出：5
示例 2：

输入：n = 1
输出：1
```
 

提示：

- 1 <= n <= 19
### 解题思路
[官方题解](https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/)
#### 方法一：动态规划

![img](96-1.png)

![img](96-2.png)

![img](96-3.png)

![img](96-4.png)