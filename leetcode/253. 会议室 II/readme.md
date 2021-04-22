### 题目 253. 会议室 II
#### 题目描述
给你一个会议时间安排的数组 `intervals` ，每个会议时间都会包括开始和结束的时间 `intervals[i] = [starti, endi]` ，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。


示例 1：

```js
输入：intervals = [[0,30],[5,10],[15,20]]
输出：2
```
示例 2：

```js
输入：intervals = [[7,10],[2,4]]
输出：1
```
 

提示：

`1 <= intervals.length <= 104`
`0 <= starti < endi <= 106`


### 解题思路
[官方题解](https://leetcode-cn.com/problems/meeting-rooms-ii/solution/hui-yi-shi-ii-by-leetcode/)
#### 队列 + 排序
- 如果 `intervals`为空，直接返回 0
- 把 `intervals` 按照 会议开始时间排序
- 使用队列 `arr`，保存所有在使用的会议房间，默认加入第一个会议
- 遍历 `intervals`
  - 遍历 `arr`中使用的会议，如果会议的结束时间，小于准备加入的会议开始时间，则把 `arr`中的会议空出
  - 然后把 准备加入的会议放入 `arr` 中
  - 把 `arr`里面的会议按照结束时间排序
  - `res`结果 与 `arr` 会议数量 取最大值
- 返回 `res`
  