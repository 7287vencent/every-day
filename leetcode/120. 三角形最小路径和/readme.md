### 题目 120. 三角形最小路径和
#### 题目描述
给定一个三角形 `triangle` ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 

示例 1：

```js
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```
示例 2：

```js
输入：triangle = [[-10]]
输出：-10
```
 

提示：

- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i - 1].length + 1`
- `-104 <= triangle[i][j] <= 104`
 

进阶：

`你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？`

### 解题思路
[官方题解](https://leetcode-cn.com/problems/triangle/solution/san-jiao-xing-zui-xiao-lu-jing-he-by-leetcode-solu/)
#### 方法一：动态规划
   2            2           2         11
  3 4   -->    3 4    -->  9 10 --> 
 6 5 7        9 6 10
4 1 8 3
- 从下往上递推过程如上
- 假设 temp[i] 为第i层 的计算出的结果 
- 那么 `temp[i] = triangle[i][j] + min(temp[j],temp[j + 1])`
