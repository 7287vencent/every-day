### 题目 485. 最大连续 1 的个数
#### 题目描述
给定一个二进制数组， 计算其中最大连续 1 的个数。

 

示例：

```js
输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
```
 

提示：

- 输入的数组只包含 0 和 1 。
- 输入数组的长度是正整数，且不超过 10,000。

### 解题思路
[官方题解](https://leetcode-cn.com/problems/max-consecutive-ones/solution/zui-da-lian-xu-1de-ge-shu-by-leetcode-so-252a/)

#### 方法一：一次遍历
为了得到数组中最大连续 `1` 的个数，需要遍历数组，并记录最大的连续 `1` 的个数和当前的连续 `1` 的个数。如果当前元素是 `1`，则将当前的连续 `1` 的个数加 `1`，否则，使用之前的连续 `1` 的个数更新最大的连续 `1` 的个数，并将当前的连续 `1` 的个数清零。

遍历数组结束之后，需要再次使用当前的连续 `1` 的个数更新最大的连续 `1` 的个数，因为数组的最后一个元素可能是 `1`，且最长连续 `1` 的子数组可能出现在数组的末尾，如果遍历数组结束之后不更新最大的连续 `1` 的个数，则会导致结果错误。

#### 代码
```js
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0, count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
};

```