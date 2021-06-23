### 题目 530. 二叉搜索树的最小绝对差
#### 题目描述
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

示例：

```JS
输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
```
 

提示：

- 树中至少有 2 个节点。
- 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
### 解题思路
#### 方法一：中序遍历
[官方题解](https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/solution/er-cha-sou-suo-shu-de-zui-xiao-jue-dui-chai-by-lee/)