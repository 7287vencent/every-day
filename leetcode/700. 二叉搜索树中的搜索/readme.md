### 题目 700. 二叉搜索树中的搜索
#### 题目描述
给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

例如，

```js
给定二叉搜索树:

        4
       / \
      2   7
     / \
    1   3

和值: 2
你应该返回如下子树:

      2     
     / \   
    1   3
```
- 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。

### 解题思路
[官方题解](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/solution/er-cha-sou-suo-shu-zhong-de-sou-suo-by-leetcode/)
#### 方法一：递归
- 太简单了，啥也不说