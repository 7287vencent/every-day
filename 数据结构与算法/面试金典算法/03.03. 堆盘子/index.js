/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
  this.Stack = []
  this.maxcap = cap
};

/** 
* @param {number} val
* @return {void}
*/
StackOfPlates.prototype.push = function (val) {
  // 如果要开辟的栈大小为 0 就直接返回 -1
  if (this.maxcap === 0) return -1
  // 先判断 Stack 是否为空
  if (this.Stack.length === 0) {
    let arr = []
    arr.push(val)
    this.Stack.push(arr)
  } else {
    // 判断 当前栈 是否已满
    if (this.Stack[this.Stack.length - 1].length === this.maxcap) {
      // 满了
      let arr = []
      arr.push(val)
      this.Stack.push(arr)
    } else {
      // 没有满
      this.Stack[this.Stack.length - 1].push(val)
    }
  }
};

/**
* @return {number}
*/
StackOfPlates.prototype.pop = function () {

  // if (this.Stack.length !== 0) {
  //     // 获取当前栈
  //     let curStack = this.Stack[this.Stack.length -1]
  //     let result = curStack.pop()
  //     // 判断是否需要删除当前栈
  //     if (curStack.length === 0) {
  //         this.Stack.pop()
  //     }
  //     return result
  // } else {
  //     return -1
  // }

  // 上面代码可以用下面的直接替代
  return this.popAt(this.Stack.length - 1)
};

/** 
* @param {number} index
* @return {number}
*/
StackOfPlates.prototype.popAt = function (index) {
  // console.log(this.Stack, index)
  if (this.Stack.length !== 0) {
    let curStack = this.Stack[index]
    // 保证当前栈一定存在
    if (curStack) {
      let result = curStack.pop()
      if (curStack.length === 0) {
        this.Stack.splice(index, 1)
      }
      return result
    } else {
      return -1
    }

  } else {
    return -1
  }
};

/**
* Your StackOfPlates object will be instantiated and called as such:
* var obj = new StackOfPlates(cap)
* obj.push(val)
* var param_2 = obj.pop()
* var param_3 = obj.popAt(index)
*/