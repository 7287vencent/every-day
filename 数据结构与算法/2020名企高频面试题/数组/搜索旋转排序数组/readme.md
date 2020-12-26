## 题目 搜索旋转排序数组
#### 题目描述
升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。

请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

示例 1：
```js
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```
示例 2：
```js
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```
示例 3：
```js
输入：nums = [1], target = 0
输出：-1
 ```

提示：

`1 <= nums.length <= 5000`

`-10^4 <= nums[i] <= 10^4`

`nums 中的每个值都 独一无二`

`nums 肯定会在某个点上旋转`

`-10^4 <= target <= 10^4`

`相关标签`
`数组`
`二分查找`

### 解题思路
#### 思路
#### 方法一：二分法
思路：使用二分法有一个关键点要想清楚，即便是转换后的数组，左右两边还是有序的数组。
[官方题解](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-by-leetcode-solut/)