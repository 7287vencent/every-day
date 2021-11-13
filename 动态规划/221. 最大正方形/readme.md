### 题目 221. 最大正方形
#### 题目描述
在一个由 '`0`' 和 '`1`' 组成的二维矩阵内，找到只包含 '`1`' 的最大正方形，并返回其面积。


示例 1：

![img](221-1.jpeg)


```js
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
```
示例 2：

![img](221-2.jpeg)

```js
输入：matrix = [["0","1"],["1","0"]]
输出：1
```
示例 3：

```js
输入：matrix = [["0"]]
输出：0
```
 

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] 为 '0' 或 '1'

### 解题思路
[官方题解](https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-by-leetcode-solution/)

![img](221-3.png)
![img](221-4.png)
![img](221-5.png)
![img](221-6.png)