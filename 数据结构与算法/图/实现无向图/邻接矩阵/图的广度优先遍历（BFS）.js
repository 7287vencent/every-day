
/**
 * 无向图
 */
class Graph {
  // .... 

  bfs (node) {
    if (node >= 0 && node < this.matrix.length) {
      const result = [];
      const hash = {};
      const queue = [];
      for (let i = 0; i < this.matrix.length; i++) {
        hash[i] = false;
      }
      hash[node] = true;
      result.push(node);
      queue.push(node);
      while (queue.length > 0) {
        let q = queue.shift();
        let list = this.matrix[q];
        for (let i = 0; i < list.length; i++) {
          if (
            list[i] === 1 &&
            !hash[i]
          ) {
            result.push(i);
            hash[i] = true;
            queue.push(i);
          }
        }
      }
      return result;
    }
    return -1;
  }

  dfs (node) {
    if (node >= 0 && node < this.matrix.length) {
    }
  }
}
