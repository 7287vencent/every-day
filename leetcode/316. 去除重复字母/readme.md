### 题目 316. 去除重复字母
#### 题目描述
给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

 

示例 1：

```js
输入：s = "bcabc"
输出："abc"
```
示例 2：

```js
输入：s = "cbacdcbc"
输出："acdb"
```
 

提示：

- 1 <= s.length <= 104
- s 由小写英文字母组成
### 解题思路
[官方题解](https://leetcode-cn.com/problems/remove-duplicate-letters/solution/qu-chu-zhong-fu-zi-mu-by-leetcode-soluti-vuso/)
#### 方法一：贪心 + 单调栈
- 简单来说就是，先获取 `s` 里面每个字符出现的次数
- 然后迭代 `s`,如果当前字符剩余出现的次数大于1
- 则不加入，否则就加入
- 可能有勿，没多想