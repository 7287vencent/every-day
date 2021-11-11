### 题目 63. 不同路径 II
#### 题目描述
一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为“`Start`” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“`Finish`”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？


![img](63-1.png)

网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。

 

示例 1：

![img](63-2.jpeg)

```js
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
```
输出：2
```js
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```
示例 2：

![img](63-3.jpeg)

```js
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```
 

提示：

- m == obstacleGrid.length
- n == obstacleGrid[i].length
- 1 <= m, n <= 100
- obstacleGrid[i][j] 为 0 或 1

### 解题思路
[官方题解](https://leetcode-cn.com/problems/unique-paths-ii/solution/bu-tong-lu-jing-ii-by-leetcode-solution-2/)

![img](63-4.png)
![img](63-5.png)
![img](63-6.png)