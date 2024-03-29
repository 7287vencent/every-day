## 题目 56 - I. 数组中数字出现的次数
#### 题目描述
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是 O(n)，空间复杂度是 O(1)。

示例 1：

``` js
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
```
示例 2：

``` js
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
```
限制：

`2 <= nums.length <= 10000`

### 解题思路
#### 思路
`标签：位运算`
- 整体思路：
  - 求解一个只出现一次的数字是非常容易的，只需要将所有数字进行一次异或运算即可，这个是求解这道题的前置知识，如果不了解可以查看 136. 只出现一次的数字
  - 如果程序中存在两个只出现一次的数字，那么进行所有数字的异或运算之后，就会剩下这两个数字的异或结果
  - 异或运算上某一位如果为 1，则说明这两个值在这一位上是不同的，那么可以根据这个特性，将数组中的数字分成 2 组，分别进行异或运算就可以得到最终的两个数字
- 复杂度：
  - 时间复杂度：O(n)O(n)。第一次异或需要遍历一次数组，第二次分组需要遍历一次数组
  - 空间复杂度：O(1)O(1)。只需要保存第一次的数组和还有异或位即可
#### 算法流程
1. 首先初始化异或结果 tmp，进行数组遍历，完成所有数字的异或运算
2. 初始化异或位 div，从最低位开始，找到第一位为1的结果
3. 再次遍历数组，根据 div & num 运算进行数字分组，组内进行异或运算，最终得到两组的结果 a、b 即为最终的结果
