### 题目 34. 在排序数组中查找元素的第一个和最后一个位置
#### 题目描述
给定一个按照升序排列的整数数组 nums，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

进阶：

- 你可以设计并实现时间复杂度为 `O(log n)` 的算法解决此问题吗？
 

示例 1：

```js
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```
示例 2：

```js
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```
示例 3：

```js
输入：nums = [], target = 0
输出：[-1,-1]
```
 

提示：

- 0 <= nums.length <= 105
- -109 <= nums[i] <= 109
- nums 是一个非递减数组
- -109 <= target <= 109


### 解题思路
[官方题解](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solution/zai-pai-xu-shu-zu-zhong-cha-zhao-yuan-su-de-di-3-4/)