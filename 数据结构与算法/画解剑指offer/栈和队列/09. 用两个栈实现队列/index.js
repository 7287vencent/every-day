var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // ? 1. 先判断 stack2 是否为空, 空的话就把stack1 添加进去，否则直接返回
  if (this.stack2.length !== 0) {
    return this.stack2.pop();
  }
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.length ? this.stack2.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
