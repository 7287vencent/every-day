### 题目 796. 旋转字符串
#### 题目描述
给定两个字符串, `A` 和 `B`。

`A` 的旋转操作就是将 `A` 最左边的字符移动到最右边。 例如, 若 `A` = `'abcde'`，在移动一次之后结果就是'`bcdea`' 。如果在若干次旋转操作之后，`A` 能变成`B`，那么返回`True`。

```js
示例 1:
输入: A = 'abcde', B = 'cdeab'
输出: true
```

```js
示例 2:
输入: A = 'abcde', B = 'abced'
输出: false
```
注意：

- A 和 B 长度不超过 100。


### 解题思路
[官方题解](https://leetcode-cn.com/problems/rotate-string/solution/xuan-zhuan-zi-fu-chuan-by-leetcode/)

#### 方法四：KMP 算法
判断一个串是否为另一个串的子串的最优时间复杂度的算法是 `KMP` 算法。和方法二相同，我们只需要用 `KMP` 算法判断 `B` 是否为 `A + A` 的子串即可。`KMP` 算法较难理解，这里给出了力扣第 28 题 实现 `strstr()` 讨论区中一个高赞 `KMP` 算法详解，以及著名博主 Matrix67 的 `KMP` 算法详解。
