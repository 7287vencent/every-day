### 题目 917. 仅仅反转字母
#### 题目描述
给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

 

示例 1：

```js
输入："ab-cd"
输出："dc-ba"
```
示例 2：

```js
输入："a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
```
示例 3：

```hs
输入："Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
 
```

提示：

- S.length <= 100
- 33 <= S[i].ASCIIcode <= 122 
- S 中不包含 \ or "

### 解题思路
[官方题解](https://leetcode-cn.com/problems/reverse-only-letters/solution/jin-jin-fan-zhuan-zi-mu-by-leetcode/)
[推荐题解](https://leetcode-cn.com/problems/reverse-only-letters/solution/jsjian-ji-dai-ma-by-ybf20181212/)

#### 方法一
1. 正则匹配选出英文字母
2. replace替换原字母

replace() 方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
