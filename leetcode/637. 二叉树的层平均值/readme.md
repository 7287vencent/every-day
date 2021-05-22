### 题目 637. 二叉树的层平均值
#### 题目描述
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

示例 1：

```js
输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 
```

**提示：**

- 节点值的范围在32位有符号整数范围内。


### 解题思路
[官方题解](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/solution/er-cha-shu-de-ceng-ping-jun-zhi-by-leetcode-soluti/)
#### 方法一：BFS 
- 基础