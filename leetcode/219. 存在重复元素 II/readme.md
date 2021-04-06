### 题目 219. 存在重复元素 II
#### 题目描述
给定一个整数数组和一个整数 `k``，`判断数组中是否存在两个不同的索引 `i` 和 `j`，使得 `nums [i] = nums [j]`，并且 `i` 和 `j` 的差的 绝对值 至多为 `k`。

 

示例 1:

```js
输入: nums = [1,2,3,1], k = 3
输出: true
```
示例 2:

```js
输入: nums = [1,0,1,1], k = 1
输出: true
```
示例 3:

```js
输入: nums = [1,2,3,1,2,3], k = 2
输出: false

```
### 解题思路
[官方题解](https://leetcode-cn.com/problems/contains-duplicate-ii/solution/cun-zai-zhong-fu-yuan-su-ii-by-leetcode/)
#### 方法一：散列表
- 请查看官方题解或者代码