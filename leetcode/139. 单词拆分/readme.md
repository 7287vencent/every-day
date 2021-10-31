### 题目 139. 单词拆分
#### 题目描述
给你一个字符串 `s` 和一个字符串列表 `wordDict` 作为字典，判定 `s` 是否可以由空格拆分为一个或多个在字典中出现的单词。

说明：拆分时可以重复使用字典中的单词。

 

示例 1：

```js
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
```
示例 2：

```js
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
```
示例 3：

```js
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```
 

提示：

- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s 和 wordDict[i] 仅有小写英文字母组成
- wordDict 中的所有字符串 互不相同

### 解题思路
[官方题解](https://leetcode-cn.com/problems/word-break/solution/dan-ci-chai-fen-by-leetcode-solution/)
![img](139-1.png)
![img](139-2.png)
