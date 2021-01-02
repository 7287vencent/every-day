### 题目 215. 数组中的第K个最大元素
#### 题目描述
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
```js
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```
示例 2:
```js
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
### 解题思路
#### 思路一：基于快速排序的选择方法
[参考题解](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/shu-zu-zhong-de-di-kge-zui-da-yuan-su-by-leetcode-/)

[参考题解二](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/javascriptsi-chong-fang-shi-jie-topkwen-ti-by-user/)

快速排序的思路是：选择一个卫兵，把小于这个卫兵的数字放到左边，大于的放到右边。然后使用递归。**很明显，排序一次完后，这个卫兵的位置，与排序完成之后的位置一样**`所以，这道题就可以变成，找到卫兵的位置是不是排序后的第 len - k 项`

#### 算法：
1. 通过一个快速排序，找到 卫兵的位置 q
2. 如果 q === index(len - k), 那么直接返回 num[q]
3. 如果 q < index, 从右半部分快速排序一次，找到一个新的 q,
4. 否则从左半部分找到一个新的 q
- 复杂度分析
时间复杂度：O(n)
空间复杂度：O(logn)

#### 方法二：数组排序，取第 k 个数
最简单

代码实现：

```js
let findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a).slice(0, k);
    return nums[k-1]
};
```
- 复杂度分析：
  - 时间复杂度：O(nlogn)
  - 空间复杂度：O(logn)
