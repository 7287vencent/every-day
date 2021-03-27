function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
var FrontMiddleBackQueue = function () {
  this.head = new ListNode(0);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  let p = this.head;
  let q = p.next;
  p.next = new ListNode(val, q);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let slow = this.head;
  let fast = this.head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let p = slow.next;

  slow.next = new ListNode(val, p);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  let p = this.head;
  while (p.next) {
    p = p.next;
  }
  p.next = new ListNode(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  let p = this.head;
  if (p.next === null) return -1;
  let q = p.next;
  p.next = q.next;
  return q.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  let slow = this.head;
  let fast = this.head.next;
  if (fast === null) return -1;
  // 注意：这里使用的是双指针找中点，如果是链表的长度为偶数的话，会返回中心两个节点的前一个节点
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let q = slow.next;
  slow.next = q.next;
  return q.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  let p = this.head;
  if (p.next === null) return -1;
  while (p.next && p.next.next) {
    p = p.next;
  }
  let q = p.next;
  p.next = null;
  return q.val;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
