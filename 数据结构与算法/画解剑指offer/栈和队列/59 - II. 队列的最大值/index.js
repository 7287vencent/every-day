var MaxQueue = function () {
  this.queue = [];
  this.deque = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.deque[0] ? this.deque[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value);
  while (this.deque.length && this.deque[this.deque.length - 1] < value) {
    this.deque.pop();
  }
  this.deque.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  let value = this.queue.shift();
  if (value === this.deque[0]) {
    this.deque.shift();
  }
  return value ? value : -1;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
