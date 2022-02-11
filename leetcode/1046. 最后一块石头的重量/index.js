/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    let a = heap.pick();
    let b = heap.pick();
    if (a !== b) {
      heap.add(Math.abs(a - b));
    }
  }
  return heap.size() !== 0 ? heap.pick() : 0;
};

class MaxHeap {
  constructor(arr = []) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2) + 1; i >= 0; i--) {
      this.down(i);
    }
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    if (i <= 0) return 0;
    return Math.floor((i - 1) / 2);
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  down(i) {
    let l = this.left(i);
    let r = this.right(i);
    let larger = i;
    if (l < this.heap.length && this.heap[l] > this.heap[larger]) larger = l;
    if (r < this.heap.length && this.heap[r] > this.heap[larger]) larger = r;
    if (larger !== i) {
      this.swap(larger, i);
      this.down(larger);
    }
  }
  up(i) {
    let p = this.parent(i);
    if (p >= 0 && this.heap[p] < this.heap[i]) {
      this.swap(p, i);
      this.up(p);
    }
  }
  add(e) {
    this.heap.push(e);
    this.up(this.heap.length - 1);
  }
  top() {
    return this.heap.length > 0 ? this.heap[0] : undefined;
  }
  size() {
    return this.heap.length;
  }
  pick() {
    this.swap(0, this.size() - 1);
    let r = this.heap.pop();
    this.down(0);
    return r;
  }
}
