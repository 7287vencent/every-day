### 题目 559. N 叉树的最大深度
#### 题目描述
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

 

示例 1：

![img](559-1.png)

```js
输入：root = [1,null,3,2,4,null,5,6]
输出：3
```
示例 2：

![img](559-2.png)

```js
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：5
```
 

提示：

- `树的深度不会超过 1000 。`
- `树的节点数目位于 [0, 104] 之间。`

### 解题思路
[官方题解](https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/solution/ncha-shu-de-zui-da-shen-du-by-leetcode/)
#### 方法一：递归