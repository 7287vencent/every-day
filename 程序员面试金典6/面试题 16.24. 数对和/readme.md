### 题目 面试题 16.24. 数对和
#### 题目描述
设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。

示例 1:

```js
输入: nums = [5,6,5], target = 11
输出: [[5,6]]
```
示例 2:

```js
输入: nums = [5,6,5,6], target = 11
输出: [[5,6],[5,6]]
```
提示：

- nums.length <= 100000


### 解题思路
[推荐题解](https://leetcode-cn.com/problems/pairs-with-sum-lcci/solution/js-shuang-zhi-zhen-fa-ji-qi-jian-lue-zhe-twfn/)

- 先对数组进行从小到大排序；
- 初始时，左指针`l = 0`， 右指针`r = nums.length - 1；`
- 判断左右指针元素加和是否为`target`，是则记录数据，然后二者同时向内收缩1；
- 如果二者和大于`target`，则 `r -= 1；`
- 如果二者和小于`target`，则 `l += 1`，直至二者相交或重合。

#### 证明：

1. 我们只考虑`[l,r]`区间内的元素，区间之外的元素表示：已被证明无法匹配或已经完成匹配；
2. 对于初始条件,`l = 0`且`r = nums.length - 1，num[l]`为区间中最小值，`num[r]`为最大值：
   - 如果此时`num[r] + num[l] < target`: 则对于`[0, r]`区间所有`num[i]`，均有`num[i] + num[l] < target`，此时说明`num[l]`无法得到匹配，可以将其剔除，因此可执行`l += 1；`
   - 如果此时`num[r] + num[l] > target:` 则对于`[0, r]`区间所有`num[i]`，均有`num[i] + num[r] > target，`此时说明`num[r]`无法得到匹配，可以将其剔除，因此可执行`r -= 1；`
   - 如果此时`num[r] + num[l] === target`: 则找到了一个数对，可以将二者剔除，执行`l++, r--。`
对于左右指针