### 题目 187. 重复的DNA序列
#### 题目描述
所有 DNA 都由一系列缩写为 '`A`'，'`C`'，'`G`' 和 '`T`' 的核苷酸组成，例如："``ACGAATTCCG``"。在研究 `DNA` 时，识别 `DNA` 中的重复序列有时会对研究非常有帮助。

编写一个函数来找出所有目标子串，目标子串的长度为 `10`，且在 `DNA` 字符串 `s` 中出现次数超过一次。

 

示例 1：

```js
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
```
示例 2：

```js
输入：s = "AAAAAAAAAAAAA"
输出：["AAAAAAAAAA"]
```
 

提示：

- `0 <= s.length <= 105`
- `s[i] 为 'A'、'C'、'G' 或 'T'`


### 解题思路
[官方题解](https://leetcode-cn.com/problems/repeated-dna-sequences/solution/zhong-fu-de-dnaxu-lie-by-leetcode/)
#### 方法一：线性时间窗口切片 + HashSet
**算法**：
- 沿长度为 NN 的字符串移动长度为 LL 的滑动窗口。
- 检查滑动窗口中的序列是否在 Hashset seen 中。
  - 如果是，则找到了重复的序列。更新输出。
  - 否则，将序列添加到 HashSet seen 中。