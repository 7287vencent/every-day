### 题目 20. 有效的括号
#### 题目描述
给定一个只包括 `'('，')'，'{'，'}'，'['，']'` 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。
 

示例 1：

```js
输入：s = "()"
输出：true
```
示例 2：

```js
输入：s = "()[]{}"
输出：true
```
示例 3：

```js
输入：s = "(]"
输出：false
```
示例 4：

```js
输入：s = "([)]"
输出：false
```
示例 5：

```js
输入：s = "{[]}"
输出：true
```
 

提示：

- 1 <= s.length <= 104
- s 仅由括号 '()[]{}' 组成

### 解题思路
[官方题解](https://leetcode.cn/problems/valid-parentheses/solution/you-xiao-de-gua-hao-by-leetcode-solution/)