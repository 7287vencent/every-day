/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */

function Listnode(val) {
  this.val = val;
  this.next = null;
}

var PhoneDirectory = function (maxNumbers) {
  this.arr = [];
  this.head = new Listnode(0);
  this.arr[0] = 0;
  let temp = this.head;
  for (let i = 1; i < maxNumbers; i++) {
    this.arr[i] = i;
    temp.next = new Listnode(i);
    temp = temp.next;
  }
};

/**
       * Provide a number which is not assigned to anyone.
              @return - Return an available number. Return -1 if none is available.
       * @return {number}
       */
PhoneDirectory.prototype.get = function () {
  if (this.head !== null) {
    let val = this.head.val;
    this.arr[val] = -1;
    this.head = this.head.next;
    return val;
  }
  return -1;
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  if (this.arr[number] === number) {
    return true;
  }
  return false;
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (!this.check(number)) {
    let cur = new Listnode(number);
    if (this.head === null) {
      this.head = cur;
    } else {
      let t = this.head.next;
      this.head.next = cur;
      cur.next = t;
    }
    this.arr[number] = number;
  }
};

// todo 数字方法
/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.arr = Array.from({ length: maxNumbers }, (val, index) => index);
};

/**
       * Provide a number which is not assigned to anyone.
              @return - Return an available number. Return -1 if none is available.
       * @return {number}
       */
PhoneDirectory.prototype.get = function () {
  if (!this.arr.length) return -1;
  return this.arr.shift();
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return this.arr.includes(number);
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (!this.check(number)) {
    this.arr.push(number);
  }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
