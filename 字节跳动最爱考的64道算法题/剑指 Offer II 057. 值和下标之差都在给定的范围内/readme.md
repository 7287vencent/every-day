### 题目 剑指 Offer II 057. 值和下标之差都在给定的范围内
#### 题目描述
给你一个整数数组 `nums` 和两个整数 `k` 和 `t` 。请你判断是否存在 两个不同下标 `i` 和 `j`，使得 `abs(nums[i] - nums[j]) <= t` ，同时又满足 `abs(i - j) <= k 。`

如果存在则返回 `true`，不存在返回 `false`。

 

示例 1：

```js
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
```
示例 2：

```js
输入：nums = [1,0,1,1], k = 1, t = 2
输出：true
```
示例 3：

```js
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false
```
 

提示：

- 0 <= nums.length <= 2 * 104
- -231 <= nums[i] <= 231 - 1
- 0 <= k <= 104
- 0 <= t <= 231 - 1


### 解题思路
[官方题解](https://leetcode.cn/problems/7WqeDu/solution/zhi-he-xia-biao-zhi-chai-du-zai-gei-ding-94ei/)

[推荐题解](https://leetcode.cn/problems/7WqeDu/solution/js-jian-ji-ban-hash-tong-by-zzw-v-icwf/)