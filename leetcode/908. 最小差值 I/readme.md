### 题目 908. 最小差值 I
#### 题目描述
给你一个整数数组 `nums`，请你给数组中的每个元素 `nums[i]` 都加上一个任意数字 `x` `（-k <= x <= k）`，从而得到一个新数组 `result` 。

返回数组 `result` 的最大值和最小值之间可能存在的最小差值。

 

示例 1：

```js
输入：nums = [1], k = 0
输出：0
解释：result = [1]
```
示例 2：

```js
输入：nums = [0,10], k = 2
输出：6
解释：result = [2,8]
```
示例 3：

```js
输入：nums = [1,3,6], k = 3
输出：0
解释：result = [3,3,3] or result = [4,4,4]
```
 

提示：

- 1 <= nums.length <= 10000
- 0 <= nums[i] <= 10000
- 0 <= k <= 10000

### 解题思路
[官方题解](https://leetcode-cn.com/problems/smallest-range-i/solution/zui-xiao-chai-zhi-i-by-leetcode/)
- 找到max 和min
- 返回 max - min - 2 * k
  