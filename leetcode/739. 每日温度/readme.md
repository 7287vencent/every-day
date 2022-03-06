### 题目 739. 每日温度
#### 题目描述
给定一个整数数组 `temperatures` ，表示每天的温度，返回一个数组 `answer` ，其中 `answer[i]` 是指在第 `i` 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。

 

示例 1:

```js
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```
示例 2:

```js
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```
示例 3:

```js
输入: temperatures = [30,60,90]
输出: [1,1,0]
```
 

提示：

- 1 <= temperatures.length <= 105
- 30 <= temperatures[i] <= 100

### 解题思路
[官方题解](https://leetcode-cn.com/problems/daily-temperatures/solution/mei-ri-wen-du-by-leetcode-solution/)
#### 方法一：单调栈
- 1475
- 739
- 901