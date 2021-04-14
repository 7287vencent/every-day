### 题目 76. 最小覆盖子串
#### 题目描述
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

示例 1：

```js
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```
示例 2：

```js
输入：s = "a", t = "a"
输出："a"
```
 

提示：

- `1 <= s.length, t.length <= 105`
- `s 和 t 由英文字母组成`
 

`进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？`

### 解题思路
[官方题解](https://leetcode-cn.com/problems/minimum-window-substring/solution/zui-xiao-fu-gai-zi-chuan-by-leetcode-solution/)

[推荐题解-小白代码](https://leetcode-cn.com/problems/minimum-window-substring/solution/xiao-bai-shi-bao-mu-ji-si-lu-jiao-cheng-nkg25/)

#### 方法一：滑动窗口
- 详细推导过程可动画请看官方题解
- 我们可以用滑动窗口的思想解决这个问题。在滑动窗口类型的问题中都会有两个指针，一个用于「延伸」现有窗口的 `r` 指针，和一个用于「收缩」窗口的 `l` 指针。在任意时刻，只有一个指针运动，而另一个保持静止。我们在 `s` 上滑动窗口，通过移动 `r` 指针不断扩张窗口。当窗口包含 `t` 全部所需的字符后，如果能收缩，我们就收缩窗口直到得到最小窗口。

