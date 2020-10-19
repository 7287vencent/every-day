/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.popStack = [] // pop 栈
  this.pushStack = [] // push 栈
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function () {
  if (this.popStack.length) {
    return this.popStack.pop()
  } else {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop())
    }
    return this.popStack.pop()
  }
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function () {
  if (this.popStack.length) {
    return this.popStack[this.popStack.length - 1]
  }
  return this.pushStack[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  if (this.pushStack.length || this.popStack.length) {
    return false
  }
  return true
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/