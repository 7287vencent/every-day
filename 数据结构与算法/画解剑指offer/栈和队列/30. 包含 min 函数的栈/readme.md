### 题目 30. 包含 min 函数的栈
#### 题目描述
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:

```js
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```
提示：

`各函数的调用总次数不超过 20000 次`


### 解题思路
#### 思路
`标签：辅助栈`
- 整体思路：push、pop、top 操作可以通过建立普通的栈结构完成操作，对于取最小值 min 函数则需要建立辅助栈，辅助栈中降序存储 push 过程中的值
- 时间复杂度：O(1)，空间复杂度：O(n)
#### 算法流程
1. MinStack 构造函数中初始化数据栈 stack1 和辅助栈 stack2
2. push 函数中将 x 正常添加到 stack1 中，如果 stack2 为空或者 stack2 栈顶值大于等于 x 时，则将 x 加入 stack2 中，这样保证了 stack2 中的值一定是降序的，存储的数量会小于等于 stack1
3. pop 函数中首先 stack1 需要将值 pop 出去，如果 stack2 栈顶数据与 stack1 栈顶数据相等，则将 stack2 的值也 pop 出去，保证数据栈和辅助栈的数据一致性
4. top 函数则直接取 stack1 栈顶值即可
5. min 函数则直接取 stack2 栈顶值即可
