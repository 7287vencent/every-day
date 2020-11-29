var MaxQueue = function () {
  this.queue = []
  this.deque = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.deque[0] || -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  while (this.deque.length > 0 && this.deque[this.deque.length - 1] < value) {
    this.deque.pop()
  }
  this.deque.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  const head = this.queue.length > 0 ? this.queue.shift() : -1
  if (this.deque.length > 0 && head === this.deque[0]) {
    this.deque.shift()
  }
  return head
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */