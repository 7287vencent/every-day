### 题目 605. 种花问题
#### 题目描述
假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给你一个整数数组  `flowerbed` 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 `true` ，不能则返回 `false`。

 

示例 1：

```js
输入：flowerbed = [1,0,0,0,1], n = 1
输出：true
```
示例 2：

```js
输入：flowerbed = [1,0,0,0,1], n = 2
输出：false
```
 

提示：

- `1 <= flowerbed.length <= 2 * 104`
- `flowerbed[i] 为 0 或 1`
- `flowerbed 中不存在相邻的两朵花`
- `0 <= n <= flowerbed.length`
### 解题思路
#### 方法一：贪心
[官方题解](https://leetcode-cn.com/problems/can-place-flowers/solution/chong-hua-wen-ti-by-leetcode-solution-sojr/)
- 推论过程请看题解
- 总的来说分三种情况
1. 第一个 1 左边能放几个 ( i / 2)
2. 两个 1 之间能放几个 (i - prev - 2) / 2
3. 最后一个 1 右边能放几个 (m - prev - 1) / 2