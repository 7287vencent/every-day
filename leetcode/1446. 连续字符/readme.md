### 题目 1446. 连续字符
#### 题目描述
给你一个字符串 `s` ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

请你返回字符串的能量。

 

示例 1：

```js
输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
```
示例 2：

```js
输入：s = "abbcccddddeeeeedcba"
输出：5
解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
```
示例 3：

```js
输入：s = "triplepillooooow"
输出：5
```
示例 4：

```js
输入：s = "hooraaaaaaaaaaay"
输出：11
```
示例 5：

```js
输入：s = "tourist"
输出：1
```
 

提示：

- 1 <= s.length <= 500
- s 只包含小写英文字母。

### 解题思路
[官方题解](https://leetcode-cn.com/problems/consecutive-characters/solution/lian-xu-zi-fu-by-leetcode-solution-lctm/)

题目中的「只包含一种字符的最长非空子字符串的长度」，即为某个字符连续出现次数的最大值。据此可以设计如下算法来求解：

初始化当前字符连续出现次数 `cnt` 为 `1`。

从 `s[1] `开始，向后遍历字符串，如果 `s[i]=s[i-1]`，则将 `cnt` 加一，否则将 `cnt` 重置为 `1`。

维护上述过程中 `cnt` 的最大值，即为答案。