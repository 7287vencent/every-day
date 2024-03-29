### 题目 255. 验证前序遍历序列二叉搜索树
#### 题目描述
给定一个整数数组，你需要验证它是否是一个二叉搜索树正确的先序遍历序列。

你可以假定该序列中的数都是不相同的。

参考以下这颗二叉搜索树：

```js
     5
    / \
   2   6
  / \
 1   3
```
示例 1：

```js
输入: [5,2,6,1,3]
输出: false
示例 2：
```

```js
输入: [5,2,1,3,6]
输出: true
进阶挑战：
```
- 您能否使用恒定的空间复杂度来完成此题？

### 解题思路
#### 方法一：栈
**结论**
- 维护一个单调递减的栈，以及最新 `pop` 出来的值。待 `push` 进栈的节点值必须大于已经 `pop` 出来的所有元素的值，才能是合法的BST。
**思路**
  - BST的性质是左子树小于 `root`，右子树大于 `root`，所以校验这个性质即可。
  - 单调递减栈的单调性用来假设 `root` 到左子树的性质正确，再用`待 push 进栈的节点值必须大于已经 pop出来的所有元素的值` 来校验 `root` 到右子树的性质
  - 得益于单调性，已经 `pop` 出来的所有元素的值是不断递增的，所以用最新的值来校验即可
> 时间复杂度：`O(n)`，每个元素最多进出栈各1次
