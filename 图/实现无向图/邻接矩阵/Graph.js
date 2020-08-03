/**
 * 无向图
 */
class Graph {
  constructor() {
    this.matrix = [];
  }

  /**
   * 添加节点
   */
  addNode () {
    this.matrix.push([]);
    const L = this.matrix.length;
    for (let i = 0; i < L; i++) {
      let start = this.matrix[i].length;
      while (start < L) {
        this.matrix[i][start] = 0;
        start += 1
      }
    }
  }

  /**
   * 添加边
   */
  addEdge (to, from) {
    if (
      (to < this.matrix.length && to >= 0) &&
      (from < this.matrix.length && from >= 0)
    ) {
      this.matrix[to][from] = 1;
      this.matrix[from][to] = 1;
    }
  }

  print () {
    const L = this.matrix.length;
    for (let i = 0; i < L; i++) {
      const current = i;
      let neighbors = this.matrix[i].map((m, index) => {
        if (
          index !== i &&
          m === 1
        ) {
          return index;
        }
        return null;
      });
      neighbors = neighbors.filter(n => n !== null);
      const neighborsString = neighbors.join(' ');
      console.log(`节点${current}, 相邻节点${neighborsString}`);
    }
  }
}
