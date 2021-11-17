### 题目 300. 最长递增子序列
#### 题目描述
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

```js
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```
示例 2：

```js
输入：nums = [0,1,0,3,2,3]
输出：4
```
示例 3：

```js
输入：nums = [7,7,7,7,7,7,7]
输出：1
```
 

提示：
```js
1 <= nums.length <= 2500
-104 <= nums[i] <= 104
```

进阶：

`你可以设计时间复杂度为 O(n2) 的解决方案吗？`
`你能将算法的时间复杂度降低到 O(n log(n)) 吗?`
### 解题思路
[参考题解](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/)
#### 方法一：动态规划
![img](300-1.png)

- 定义状态
  - `dp[i]` 的值代表 `nums` 前 `i` 个数子的最长子序列长度
- 转移方程
  1. 当 `nums[i] > nums[j]`时， `nums[i]` 可以接在 `nums[j]` 之后，此情况下醉成上升子序列长度为 `dp[j] + 1`
  2. 当 `nums[i] <= nums[j]` 时： `nums[i] `无法接在 `nums[j]` 之后，此情况下上升子序列不成立，跳过
  3. 上述所有 `1. 情况`下计算出的 `dp[i] + 1` 的最大值，为直到 `i` 的最长上升子序列长度 `dp[i].` 实现方式为遍历 `j` 时，每轮执行 `dp[i] = max(dp[i], dp[j] + 1)`
  4. `即转移方程：dp[i] = max(dp[i], dp[j] + 1)  for j in [0, i)`
- 初始状态
  - `dp[i]` 所有元素置为 `1`
- 返回值
  - 返回 dp列表最大值，即可得到全局最长上升子序列

#### 方法二：动态规划 + 二分法
请看参考题解
[推荐题解](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/)