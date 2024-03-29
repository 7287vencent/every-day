### 题目 59 - II. 队列的最大值
#### 题目描述
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数 max_value、push_back 和 pop_front 的均摊时间复杂度都是 O(1)O(1)。

若队列为空，pop_front 和 max_value  需要返回 -1

示例 1：

```js
输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```
示例 2：

```js
输入:
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```
限制：

`1 <= push_back,pop_front,max_value的总操作数 <= 10000`
`1 <= value <= 10^5`
### 解题思路
#### 思路
`标签：单调队列、辅助队列`
- 整体思路：
  - 这道题和 59 - I 的思路很像，最难的地方在于取出最大值函数的时间复杂度如何降为 O(1)，如果每次入队的时候都维护一个最大值，那么时间复杂度很明显不满足条件
  - 使用一个额外的辅助单调队列，该队列单调递减即可，保证最大值在队列头部，这样的话就可以在取出最大值的时候时间复杂度减低
- 复杂度：
  - 时间复杂度：O(1)。取 max_value 时只需要取单调队列头部即可
  - 空间复杂度：O(n)。一共需要维护两个队列，普通队列和辅助单调队列，最差的情况是两个队列里面 nn 个数字
#### 算法流程
1. 构造函数中初始化一个普通队列 queue 和一个辅助单调队列 deque
2. max_value 函数中只需要每次从辅助单调队列 deque 取头部值即可，如果没有则返回 -1
3. push_back 函数中首先将值放入 queue 中，然后将 deque 尾部所有小于该值的元素都剔除，最后将该值放入尾部，保证单调队列递减
4. pop_front 函数中首先获取 queue 头部值 head，如果不存在则返回 -1，然后判断 deque 的头部值是否和 head 相等，如果相等则将其头部值也移除