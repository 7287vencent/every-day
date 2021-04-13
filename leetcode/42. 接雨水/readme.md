### 题目 42. 接雨水
#### 题目描述
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![img](42.png) 

示例 1：


```js
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
```
示例 2：

```js
输入：height = [4,2,0,3,2,5]
输出：9
```
 

提示：

- `n == height.length`
- `0 <= n <= 3 * 104`
- `0 <= height[i] <= 105`
### 解题思路
[官方题解](https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/)
[推荐题解-带推导过程](https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/)

#### 方法一：暴力法
- 直接按问题描述进行。对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值。
- 初始化 ans=0ans=0
- 从左向右扫描数组：
  - 初始化 `max_left=0` 和 `max_right=0`
  - 从当前元素向左扫描并更新：`max_left=max(max_left,height[j])`
  - 从当前元素向右扫描并更新：`max_right=max(max_right,height[j])`
  - 将`min(max_left,max_right)−height[i]` 累加到 `ans`

#### 方法二：动态规划
- 请看题解
- 其实就是提前把 `max_left[i]`和 `max_right[i]`计算好了
