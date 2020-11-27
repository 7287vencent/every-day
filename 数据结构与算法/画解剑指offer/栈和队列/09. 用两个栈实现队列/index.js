var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length === 0 && this.stack1.length > 0) {
    // ? stack1 入栈 stack2
    for (let i = 0, len = this.stack1.length; i < len; i++) {
      this.stack2.push(this.stack1.pop())
    }
  }
  if (this.stack2.length > 0) {
    return this.stack2.pop()
  } else {
    return -1
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */