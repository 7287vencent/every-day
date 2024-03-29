### 题目 414. 第三大的数
#### 题目描述
给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

 

示例 1：

```js
输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。
```
示例 2：

```js
输入：[1, 2]
输出：2
解释：第三大的数不存在, 所以返回最大的数 2 。
```
示例 3：

```js
输入：[2, 2, 3, 1]
输出：1
解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
```
 

提示：

- 1 <= nums.length <= 104
- -231 <= nums[i] <= 231 - 1
 

- 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？

### 解题思路
#### 思路：

- 需要找出三个最大的数，第一时间想到的是用三个变量存储起来
- 三个最大的数不能重复，需要过滤掉重复的值
- 在判断最大值时，从最大值开始比较。替换时，大的数要下降到下的数那个位置，max => mid => min。
- 如果mid或min不存在，这说明不存在第三大的数，返回max