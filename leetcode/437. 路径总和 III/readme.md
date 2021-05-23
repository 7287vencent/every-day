### 题目 437. 路径总和 III
#### 题目描述
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

```js
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```

### 解题思路
[参考题解](https://leetcode-cn.com/problems/path-sum-iii/solution/qian-zhui-he-di-gui-hui-su-by-shi-huo-de-xia-tian/)
[参考题解](https://leetcode-cn.com/problems/path-sum-iii/solution/2chong-jie-fa-xiang-jie-xi-jie-wen-ti-by-txip/)
[参考题解](https://leetcode-cn.com/problems/path-sum-iii/solution/shuang-bian-li-by-agitated-7ederbergius-c5vr/)
#### 方法一：回溯 + 前缀和

**前缀和的概念**：
- 一个节点的前缀和就是该节点到根之间的路径和。
  
**前缀和的意义**：
- 因为对于同一路径上的两个节点，上面的节点是下面节点的祖先节点，所以其前缀和之差即是这两个节点间的路径和（不包含祖先节点的值）。
  
**哈希map的使用**：
- key是前缀和， value是该前缀和的节点数量，记录数量是因为有出现复数路径的可能。
  
**回溯的意义**：
- 因为只有同一条路径上的节点间（节点和其某一祖先节点间）的前缀和做差才有意义。所以当前节点处理完之后，需要从map中移除这一个前缀和，然后再进入下一个分支路径。
