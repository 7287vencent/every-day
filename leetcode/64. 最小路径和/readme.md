### 题目 64. 最小路径和
#### 题目描述
给定一个包含非负整数的 `m x n` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

![img](64-1.jpeg)

示例 1：


```js
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```
示例 2：

```js
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```
 

提示：

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 200
- 0 <= grid[i][j] <= 100
### 解题思路
[官方题解](https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode-solution/)

![img](64-2.png)