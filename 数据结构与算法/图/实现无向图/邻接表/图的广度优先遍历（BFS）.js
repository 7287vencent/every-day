// const { Graph } = require('./Graph.js')

// BFS
/**
 * 无向图
 */
class Graph {

  // ...

  /**
   * 图的广度优先遍历
   * node 遍历的起点
   */
  bfs (node) {
    if (this.adjacencyList.has(node)) {
      const result = [];
      const hash = {};
      const queue = [];
      const nodes = this.adjacencyList.keys();
      for (let node of nodes) {
        hash[node] = false;
      }
      hash[node] = true;
      queue.push(node);
      result.push(node);
      while (queue.length > 0) {
        let q = queue.shift();
        let list = this.adjacencyList.get(q);
        for (let i = 0; i < list.length; i++) {
          let temp = list[i]
          if (!hash[temp]) {
            result.push(temp)
            hash[temp] = true
            queue.push(temp)
          }
        }
      }
      return result;
    }
    return null
  }
}

