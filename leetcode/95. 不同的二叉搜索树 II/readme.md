### 题目 95. 不同的二叉搜索树 II
#### 题目描述
给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。


示例 1：

![img](95-1.jpeg)

```js
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```
示例 2：

```js
输入：n = 1
输出：[[1]]
 
```

提示：

- 1 <= n <= 8
### 解题思路
[参考题解](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-2-7/)
#### 方法一：递归

解法一完全没有用到查找二叉树的性质，暴力尝试了所有可能从而造成了重复。我们可以利用一下查找二叉树的性质。左子树的所有值小于根节点，右子树的所有值大于根节点。

所以如果求 `1...n` 的所有可能。

我们只需要把 `1` 作为根节点，`[ ]` 空作为左子树，`[ 2 ... n ]` 的所有可能作为右子树。

`2` 作为根节点，`[ 1 ]` 作为左子树，`[ 3...n ]` 的所有可能作为右子树。

`3` 作为根节点，`[ 1 2 ]` 的所有可能作为左子树，`[ 4 ... n ]` 的所有可能作为右子树，然后左子树和右子树两两组合。

`4` 作为根节点，`[ 1 2 3 ]` 的所有可能作为左子树，`[ 5 ... n ]` 的所有可能作为右子树，然后左子树和右子树两两组合。

...

`n` 作为根节点，`[ 1... n ]` 的所有可能作为左子树，`[ ]` 作为右子树。

至于，`[ 2 ... n ]` 的所有可能以及 `[ 4 ... n ]` 以及其他情况的所有可能，可以利用上边的方法，把每个数字作为根节点，然后把所有可能的左子树和右子树组合起来即可。

如果只有一个数字，那么所有可能就是一种情况，把该数字作为一棵树。而如果是 `[ ]`，那就返回 `null。`

