### 题目 817. 链表组件
#### 题目描述
给定链表头结点 head，该链表上的每个结点都有一个 唯一的整型值 。

同时给定列表 G，该列表是上述链表中整型值的一个子集。

返回列表 G 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 G 中）构成的集合。


示例 1：

```js
输入: 
head: 0->1->2->3
G = [0, 1, 3]
输出: 2
解释: 
链表中,0 和 1 是相连接的，且 G 中不包含 2，所以 [0, 1] 是 G 的一个组件，同理 [3] 也是一个组件，故返回 2。
```
示例 2：

```js
输入: 
head: 0->1->2->3->4
G = [0, 3, 1, 4]
输出: 2
解释: 
链表中，0 和 1 是相连接的，3 和 4 是相连接的，所以 [0, 1] 和 [3, 4] 是两个组件，故返回 2。
```
 

提示：

- `如果 N 是给定链表 head 的长度，1 <= N <= 10000。`
- `链表中每个结点的值所在范围为 [0, N - 1]。`
- `1 <= G.length <= 10000`
- `G 是链表中所有结点的值的一个子集.`

### 解题思路
#### 线性扫描：
我们对链表进行一次扫描，一个组件在链表中对应一段极长的连续节点，因此如果当前的节点在列表 `G` 中，并且下一个节点不在列表 `G` 中，我们就找到了一个组件的尾节点，可以将答案加 `1`。

例如，当链表为 `0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7，G 为 [0, 2, 3, 5, 7]` 时，我们扫描之后可以发现 `0, 3, 5, 7 `四个节点是组件的尾节点，那么答案就为 `4`。

#### 复杂度分析
- 时间复杂度：`O(N+∣G∣)`，其中 `N` 是链表中的节点个数。
- 空间复杂度：`O(∣G∣)`，我们需要将 `G` 中的元素存储到无序集合中，用来快速判断一个节点是否出现在 `G` 中。
