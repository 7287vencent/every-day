### 题目 面试题 17.11. 单词距离
#### 题目描述
有个内含单词的超大文本文件，给定任意两个单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

示例：

```js
输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1
```
提示：

- words.length <= 100000

### 解题思路
[推荐题解](https://leetcode-cn.com/problems/find-closest-lcci/solution/shuang-zhi-zhen-bian-li-suo-yin-javascri-26vh/)

- 先将两个单词出现的索引取出，分别放在两个数组中
- 双指针遍历，不断更新最小距离
- 若最小距离出现了0，则直接返回