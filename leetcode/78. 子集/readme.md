### 题目 78. 子集
#### 题目描述
给你一个整数数组 `nums` ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 
示例 1：

```js
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```
示例 2：

```js
输入：nums = [0]
输出：[[],[0]]
 
```

提示：

`1 <= nums.length <= 10`

`-10 <= nums[i] <= 10`

`nums 中的所有元素 互不相同`

### 解题思路
#### 方法一：回溯
[回溯思路](https://leetcode-cn.com/problems/subsets/solution/c-zong-jie-liao-hui-su-wen-ti-lei-xing-dai-ni-gao-/)