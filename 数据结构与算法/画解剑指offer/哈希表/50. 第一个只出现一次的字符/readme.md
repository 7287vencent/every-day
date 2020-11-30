## 题目 50. 第一个只出现一次的字符
[来源：画解剑指offer](https://leetcode-cn.com/leetbook/read/illustrate-lcof/)

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

```
示例：

s = "abaccdeff"
返回 "b"

s = ""
返回 " "
```
限制：
`0 <= s 的长度 <= 50000`


### 解题思路
#### 思路
`标签：哈希`
- 首先遍历字符串将每个字符串映射到固定的位置，并且该位置存储字符串的出现次数，然后再遍历一次字符串，找到第一个只出现一次的字符
- 时间复杂度：O(n)O(n)，空间复杂度：O(1)O(1)
#### 算法流程
1. 初始化哈希表 map，大小为 26，因为只有 26 个小写字符
2. 遍历字符串 s，将遍历到的单个字符与 `'a'` 做减法，作为下标映射到哈希表中，比如 `'b' - 'a' = 1`，则位置为 map[1]
3. 再次遍历字符串 s，当出现次数为 1 的时候，返回该字符


#### 代码
``` js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map()
  for (const ch of s) {
    map.set(ch, !map.has(ch))
  }
  for (const ch of s) {
    if (map.get(ch)) {
      return ch
    }
  }
  return ' '
};

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
      return char
    }
  }
  return " "

};
```