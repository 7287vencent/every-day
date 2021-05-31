### 题目 106. 从中序与后序遍历序列构造二叉树
#### 题目描述
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出
```js
中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
```
### 解题思路
[官方题解](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/cong-zhong-xu-yu-hou-xu-bian-li-xu-lie-gou-zao-14/)
#### 方法一：递归
- 为了高效查找根节点元素在中序遍历数组中的下标，我们选择创建哈希表来存储中序序列，即建立一个（元素，下标）键值对的哈希表。
- 定义递归函数 `helper(in_left, in_right)` 表示当前递归到中序序列中当前子树的左右边界，递归入口为`helper(0, n - 1)` ：
  - 如果 `in_left > in_right`，说明子树为空，返回空节点。
  - 选择后序遍历的最后一个节点作为根节点。
  - 利用哈希表 `O(1)` 查询当根节点在中序遍历中下标为 `index`。从 `in_left` 到 `index - 1` 属于左子树，从 `index + 1` 到 `in_right` 属于右子树。
  - 根据后序遍历逻辑，递归创建右子树 `helper(index + 1, in_right)` 和左子树 `helper(in_left, index - 1)`。注意这里有需要先创建右子树，再创建左子树的依赖关系。可以理解为在后序遍历的数组中整个数组是先存储左子树的节点，再存储右子树的节点，最后存储根节点，如果按每次选择「后序遍历的最后一个节点」为根节点，则先被构造出来的应该为右子树。
  - 返回根节点 `root`。
