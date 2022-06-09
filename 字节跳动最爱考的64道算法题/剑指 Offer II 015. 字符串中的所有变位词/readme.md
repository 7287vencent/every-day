### 题目 剑指 Offer II 015. 字符串中的所有变位词
#### 题目描述
给定两个字符串 `s` 和 `p`，找到 `s` 中所有 `p` 的 **变位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

变位词 指字母相同，但排列不同的字符串。

 

示例 1：

```js
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
```
 示例 2：

```js
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
```
 

提示:

- `1 <= s.length, p.length <= 3 * 104`
- `s 和 p 仅包含小写字母`


### 解题思路
[官方题解](https://leetcode.cn/problems/VabMRr/solution/zi-fu-chuan-zhong-de-suo-you-bian-wei-ci-euod/)