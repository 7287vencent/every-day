### 题目 687. 最长同值路径
#### 题目描述
给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示。

示例 1:

```js
输入:

              5
             / \
            4   5
           / \   \
          1   1   5
输出:

2
```
示例 2:

```js
输入:

              1
             / \
            4   5
           / \   \
          4   4   5
输出:

2
```
- 注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。


### 解题思路
#### 方法一：递归
思路

我们可以将任何路径（具有相同值的节点）看作是最多两个从其根延伸出的箭头。
具体地说，路径的根将是唯一节点，因此该节点的父节点不会出现在该路径中，而箭头将是根在该路径中只有一个子节点的路径。
然后，对于每个节点，我们想知道向左延伸的最长箭头和向右延伸的最长箭头是什么？我们可以用递归来解决这个问题。
算法
令 `arrow_length(node)` 为从节点 `node` 延伸出的最长箭头的长度。如果 `node.Left` 存在且与节点 `node` 具有相同的值，则该值就会是 `1 + arrow_length(node.left)`。在 `node.right` 存在的情况下也是一样。

当我们计算箭头长度时，候选答案将是该节点在两个方向上的箭头之和。我们将这些候选答案记录下来，并返回最佳答案。