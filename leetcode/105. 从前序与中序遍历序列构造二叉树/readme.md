### 题目 105. 从前序与中序遍历序列构造二叉树
#### 题目描述
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

```js
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

```

### 解题思路
[参考题解](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/)

[官方题解](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/)

#### 方法一：推荐方法

- 变量 pre 保存当前要构造的树的 root
- 变量 in 保存 inorder 数组中可以成为 root 的数字们的开头那个
- 对于当前要构造的树，有一个停止点 stop ，inorder 数组中第 in 项到第 stop 项是要构造的树的节点值们
- 每次递归调用，都会确定出一个停止点，它告诉了子调用在哪里停止，把自己的根节点值作为左子树调用的停止点，自己的（父调用给下来的）停止点作为右子树的停止点
