### 题目 39. 组合总和
#### 题目描述
给定一个无重复元素的数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的数字可以无限制重复被选取。

说明：

所有数字（包括 `target`）都是正整数。
解集不能包含重复的组合。 
示例 1：

```js
输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
```
示例 2：

```js
输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```
 

提示：

- `1 <= candidates.length <= 30`
- `1 <= candidates[i] <= 200`
- `candidate 中的每个元素都是独一无二的。`
- `1 <= target <= 500`

### 解题思路
[官方题解](https://leetcode-cn.com/problems/combination-sum/solution/zu-he-zong-he-by-leetcode-solution/)
#### 方法一：搜索回溯
请看官方题解