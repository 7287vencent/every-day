## 题目 复制带随机指针的链表
#### 题目描述
给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

要求返回这个链表的 深拷贝。 

我们用一个由 `n` 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 `[val, random_index]` 表示：

`val`：一个表示 `Node.val` 的整数。
`random_index`：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  `null` 。
示例 1：
![el](./e1.png)
```js
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```
示例 2：
![e2](./e2.png)
```js
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```
示例 3：

![e3](./e3.png)
```js
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```
示例 4：
```js
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
```

提示：

- `-10000 <= Node.val <= 10000`
- `Node.random 为空（null）或指向链表中的节点。`
- `节点数目不超过 1000`
相关标签: `哈希表` `链表` `JavaScript`

### 解题思路
#### 思路

[参考题解](https://leetcode-cn.com/problems/copy-list-with-random-pointer/solution/fu-zhi-dai-sui-ji-zhi-zhen-de-lian-biao-by-leetcod/)

1. 使用`map`拷贝一份当前链表，key 为 链表节点，value 为 new Node(cur.val)
2. 给 map 里面的 链表建立 next 和random 关系

有点像是：参考题解里面方法二的改进版