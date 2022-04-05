### 题目 526. 优美的排列
#### 题目描述
假设有从 `1` 到 `n` 的 `n` 个整数。用这些整数构造一个数组 `perm`（下标从 `1` 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：

- perm[i] 能够被 i 整除
- i 能够被 perm[i] 整除
给你一个整数 `n` ，返回可以构造的 **优美排列** 的 数量 。

 

示例 1：

```js
输入：n = 2
输出：2
解释：
第 1 个优美的排列是 [1,2]：
    - perm[1] = 1 能被 i = 1 整除
    - perm[2] = 2 能被 i = 2 整除
第 2 个优美的排列是 [2,1]:
    - perm[1] = 2 能被 i = 1 整除
    - i = 2 能被 perm[2] = 1 整除
```
示例 2：

```js
输入：n = 1
输出：1
```
 

提示：

- 1 <= n <= 15


### 解题思路
[官方题解](https://leetcode-cn.com/problems/beautiful-arrangement/solution/you-mei-de-pai-lie-by-leetcode-solution-vea2/)