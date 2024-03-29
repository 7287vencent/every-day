### 题目 322. 零钱兑换
#### 题目描述
给定不同面额的硬币 `coins` 和一个总金额 `amount`。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 `-1`。

你可以认为每种硬币的数量是无限的。


示例 1：

```js
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```
示例 2：

```js
输入：coins = [2], amount = 3
输出：-1
```
示例 3：

```js
输入：coins = [1], amount = 0
输出：0
```
示例 4：

```js
输入：coins = [1], amount = 1
输出：1
```
示例 5：

```js
输入：coins = [1], amount = 2
输出：2
```
 

提示：

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 231 - 1`
- `0 <= amount <= 104`


### 解题思路
[官方题解：有递推过程](https://leetcode-cn.com/problems/coin-change/solution/322-ling-qian-dui-huan-by-leetcode-solution/)
#### 方法一：动态规划
- dp[i] = min(dp[i], dp[i - coins[j]] + 1)