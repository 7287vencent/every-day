## 题目 68 - I. 二叉搜索树的最近公共祖先
#### 题目描述
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

![img](./binarysearchtree_improved.png)

示例 1:

``` js
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```
示例 2:

``` js
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```
说明:

`所有节点的值都是唯一的。`
`p、q 为不同节点且均存在于给定的二叉搜索树中。`

### 解题思路
#### 思路
`标签：二叉搜索树`
- 整体思路：
  - 祖先节点定义：当前节点的父节点，其父节点的父节点，只要当前节点在某一个节点的子树下，则可以称其为当前节点的祖先节点
  - 公共祖先定义：p、q 节点都在某一个节点的子树下或者其自身，则可以称其为 p、q 节点的公共祖先节点
  - 最近公共祖先定义：从祖先节点的定义可以知道，如果 x 节点是 p、q 节点的公共祖先，那么 x 节点的祖先节点也一定是 p、q 节点的公共祖先，则距离 p、q 个节点深度最小的为最近公共祖先，通常表现为 p、q 节点不在最近公共祖先的同一个子树上
  - 根据题意可知，树是二叉搜索树，所有的节点值唯一，则可以根据 p、q 节点不在最近公共祖先的同一个子树上的特征，进行循环遍历，找到结果
- 时间复杂度：O(n)，空间复杂度：O(1)
#### 算法流程
1. 首先在同一个二叉树上的 p、q 节点一定存在最近公共祖先，所以定义一个循环直到找到该节点为止
2. 如果 root.val > p.val && root.val > q.val，说明 p、q 节点都在 root 节点的左子树上，令 root = root.left，继续查询
3. 如果 root.val < p.val && root.val < q.val，说明 p、q 节点都在 root 节点的右子树上，令 root = root.right，继续查询
4. 如果 root.val == p.val，说明 p 节点就是最近公共祖先
5. 如果 root.val == q.val，说明 q 节点就是最近公共祖先
6. 如果 root.val > p.val && root.val < q.val 或者 root.val < p.val && root.val > q.val，说明 root 节点就是最近公共祖先
7. 4、5、6 三部分可以合并为其他情况，直接返回 root 即可