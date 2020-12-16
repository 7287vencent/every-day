## 题目 合并两个有序数组
#### 题目描述
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明：

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 
示例：
```js
输入：
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出：[1,2,2,3,5,6]
```

提示：

`-10^9 <= nums1[i], nums2[i] <= 10^9`
`nums1.length == m + n`
`nums2.length == n`

### 解题思路
#### 思路
`标签：数组、双指针`
[参考](https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetcode/)
#### 方法三 : 双指针 / 从后往前
1. 三个指针，p1指向num1有效元素尾部，p2指向num2有效元素尾部，p指向num1尾部
2. 当p1 >= 0,并且 num1[p1] > num2[p2]时，把 num[p1] 放入 num[p]的位置
3. 否则 num1[p] = num2[p2]
4. 只要注意：num2 里面的元素都小于 num1 的话，循环条件结束的话，会造成 num2 里面的元素没有存入 num1 中，所以循环条件只为 p2 >= 0
5. 这样的话，p 一定会执行到 0, num2 里面的元素也一定会存入 num1 中

