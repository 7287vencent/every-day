var SortedStack = function () {
  // 双栈思路
  this.Stack = []
  this.rStack = []
};

/** 
* @param {number} val
* @return {void}
*/
SortedStack.prototype.push = function (val) {
  if (!this.Stack.length) {
    this.Stack.push(val)
  } else {
    // 找到 当前 元素 应该插入的位置
    while (this.Stack.length) {
      // 从后往前一个一个遍历 pos 为 stack 里面的最小值
      let pos = this.Stack[this.Stack.length - 1]
      // console.log(pos, val)
      if (pos >= val) {
        this.Stack.push(val)
        break
      } else {

        this.rStack.push(this.Stack.pop())
      }
    }
  }
  // 如果 插入的当前元素 最大 会导致 stack 为 []
  if (!this.Stack.length) {
    this.Stack.push(val)
  }
  // 把 r_stack 放入 stack 中
  while (this.rStack.length) {
    this.Stack.push(this.rStack.pop())
  }

};

/**
* @return {void}
*/
SortedStack.prototype.pop = function () {
  if (this.Stack.length) {
    return this.Stack.pop()
  }
  return -1
};

/**
* @return {number}
*/
SortedStack.prototype.peek = function () {
  // console.log(this.Stack)
  if (this.Stack.length) {
    return this.Stack[this.Stack.length - 1]
  }
  return -1
};

/**
* @return {boolean}
*/
SortedStack.prototype.isEmpty = function () {
  return !this.Stack.length
};

/**
* Your SortedStack object will be instantiated and called as such:
* var obj = new SortedStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.isEmpty()
*/