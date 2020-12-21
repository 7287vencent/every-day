function Node (key, val) {
  this.key = key
  this.val = val
  this.next = null
  this.pre = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.hash = new Map()
  this.head = new Node()
  this.last = new Node()
  this.head.next = this.last
  this.last.pre = this.next
  this.count = 0
  this.max = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 1. 存在则把值返回，并把这个节点位置移动到双向链表的头部
  // 2. 不存在则返回-1

  if (!this.hash.has(key)) {
    return -1
  } else {
    const node = this.hash.get(key)
    this.moveToHead(node)
    return node.val
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 1. 先判断 key 值是否存在，存在就直接更新节点，并把节点移动到头部
  // 2. 节点不存在：创建一个新的节点，并添加进哈希表，移动到连标的头部，
  if (this.hash.has(key)) {
    const node = this.hash.get(key)
    node.val = value
    this.moveToHead(node)
  } else {
    const node = new Node(key, value)
    this.hash.set(key, node)
    this.addToHead(node)
    this.count++
    if (this.count > this.max) {
      // 移除尾部的节点
      const remove = this.removeLast()
      this.hash.delete(remove.key)
      this.count--
    }
  }
};

LRUCache.prototype.addToHead = function (node) {
  node.next = this.head.next
  this.head.next.pre = node
  node.pre = this.head
  this.head.next = node
}

LRUCache.prototype.removeNode = function (node) {
  node.pre.next = node.next
  node.next.pre = node.pre
}

LRUCache.prototype.removeLast = function () {
  const node = this.last.pre
  this.removeNode(node)
  return node
}
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node)
  this.addToHead(node)
}





/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */