class Graph {
  constructor() {
    this.matrix = [];
  }

  addNode () {
    this.matrix.push([]);
    const L = this.matrix.length;
    for (let i = 0; i < L; i++) {
      let start = this.matrix[i].length;
      while (start < L) {
        this.matrix[i][start] = '*';
        start += 1
      }
    }
  }

  /**
   * to 端点1
   * from 端点2
   * weight 端点1和端点2的权重
   */
  addEdge (to, from, weight) {
    if (
      (to < this.matrix.length && to >= 0) &&
      (from < this.matrix.length && from >= 0) &&
      typeof weight === 'number'
    ) {
      this.matrix[to][from] = weight;
      this.matrix[from][to] = weight;
    }
  }
}
