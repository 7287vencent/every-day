### 题目 09. 用两个栈实现队列
#### 题目描述
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。（若队列中没有元素，deleteHead 操作返回 -1）

示例 1：

```js
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```
示例 2：

```js
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```
提示：

`1 <= values <= 10000`

`最多会对 appendTail、deleteHead 进行 10000 次调用`


### 解题思路
#### 思路
`标签：栈和队列`
- 整体思路：栈实现队列的本质就是负负得正，两次先进后出的结果就是先进先出了。在构造函数中完成两个栈的初始化工作，在 appendTail 函数中向其中一个栈 stack1 结尾插入整数，在 deleteHead 函数中如果 stack2 为空，则将 stack1 的值全部弹出放到 stack2 中，再从 stack2 中取值，这样达到了负负为正的队列效果
- 时间复杂度：O(1)，空间复杂度：O(n)
#### 算法流程
1. CQueue 构造函数，初始化 stack1 和 stack2
2. appendTail 函数，将 value 加到 stack1 里面，先进后出
3. deleteHead 函数，判断 stack2 是否为空，如果为空则将当前 stack1 中的所有值都弹出放入 stack2 中。此时由于 stack2 也是先进后出，所以如果 stack2 不为空，则将其尾部值弹出，实现了先进先出队列的效果，如果 stack2 为空，则返回 -1