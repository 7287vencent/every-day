### 题目 203. 移除链表元素
#### 题目描述
删除链表中等于给定值 val 的所有节点。

示例:

```js
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```

### 解题思路
[官方题解](https://leetcode-cn.com/problems/remove-linked-list-elements/solution/yi-chu-lian-biao-yuan-su-by-leetcode/)
#### 方法：哨兵节点
如果删除的节点是中间的节点，则问题似乎非常简单：
- 选择要删除节点的前一个结点 prev。
- 将 prev 的 next 设置为要删除结点的 next。

#### 复杂度分析
- 时间复杂度：O(N)，只遍历了一次。
- 空间复杂度：O(1)。
