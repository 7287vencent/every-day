### 题目 525. 连续数组
#### 题目描述
给定一个二进制数组 `nums` , 找到含有相同数量的 `0` 和 `1` 的最长连续子数组，并返回该子数组的长度。

 

示例 1:

```js
输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
```
示例 2:

```js
输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
```
 

提示：

- 1 <= nums.length <= 105
- nums[i] 不是 0 就是 1
### 解题思路
[官方题解](https://leetcode-cn.com/problems/contiguous-array/solution/lian-xu-shu-zu-by-leetcode-solution-mvnm/)

[推荐题解](https://leetcode-cn.com/problems/contiguous-array/solution/dong-tu-yan-shi-qian-zhui-he-si-xiang-by-z2no/)

#### 方法一：前缀和 + 哈希
**步骤**
这题跟昨天的题如出一辙，大体思路一致。首先我们还是先说一下算法的步骤。
**算法步骤**：

创建一个哈希表，用 `key` 来储存 `cur` 值, `value` 来储存当前 `index`。
假设我们碰到 `0` 就将 `cur` `decrement` (减一), 碰到 `1` 则 `increment` (加一)。
如果我们能在哈希表中找到当前的 `cur` 值, 则取出对应的 `pos`, 在看当前的 `index - pos` 是否比 `ans` 大, 取其中的最优解。
核心：由于以上碰 `1` 加一，碰 `0` 减一的操作，当0与1数量一致时(连续数组), 其连续数组的和为零。因此我们知道数组前面的 `cur` 值是什么，在到达该连续数组尾部时就不会变。因此我们只需要检查哈希表中是否存在其相同的 `cur` 值即可！(多读几遍)

![img](525-1.png)