### 题目 450. 删除二叉搜索树中的节点
#### 题目描述
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

1. 首先找到需要删除的节点；
2. 如果找到了，删除它。
**说明**： 要求算法时间复杂度为 O(h)，h 为树的高度。

示例:

```js
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

    5
   / \
  4   6
 /     \
2       7

另一个正确答案是 [5,2,6,null,4,null,7]。

    5
   / \
  2   6
   \   \
    4   7
```

### 解题思路
[官方题解](https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/shan-chu-er-cha-sou-suo-shu-zhong-de-jie-dian-by-l/)

- 如果 `key > root.val`，说明要删除的节点在右子树，`root.right = deleteNode(root.right, key)。`
- 如果 `key < root.val`，说明要删除的节点在左子树，`root.left = deleteNode(root.left, key)。`
- 如果 `key == root.val`，则该节点就是我们要删除的节点，则：
- 如果该节点是叶子节点，则直接删除它：`root = null。`
- 如果该节点不是叶子节点且有右节点，则用它的后继节点的值替代 `root.val = successor.val`，然后删除后继节点。
- 如果该节点不是叶子节点且只有左节点，则用它的前驱节点的值替代 `root.val = predecessor.val`，然后删除前驱节点。
- 返回 `root`。