### 题目 680. 验证回文字符串 Ⅱ
#### 题目描述
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:
``` js
输入: "aba"
输出: True
```
示例 2:
``` js
输入: "abca"
输出: True
解释: 你可以删除c字符。
```
注意:

字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
### 解题思路
[官方题解](https://leetcode-cn.com/problems/valid-palindrome-ii/solution/yan-zheng-hui-wen-zi-fu-chuan-ii-by-leetcode-solut/)
#### 思路
#### 方法一：贪心
`标签：贪心算法、字符串`
- 基本思路
- 通过贪心算法实现。初始化两个指针 `low` 和 `high` 分别指向字符串的第一个字符和最后一个字符。每次判断两个指针指向的字符是否相同，如果相同，则更新指针，令 `low = low + 1` 和 `high = high - 1`，然后判断更新后的指针范围内的子串是否是回文字符串。如果两个指针指向的字符不同，则两个字符中必须有一个被删除，此时我们就分成两种情况：即删除左指针对应的字符，留下子串 s``[low + 1], s[low + 2], ..., s[high]`，或者删除右指针对应的字符，留下子串 `s[low], s[low + 1], ..., s[high - 1]`。当这两个子串中至少有一个是回文串时，就说明原始字符串删除一个字符之后就以成为回文串。
