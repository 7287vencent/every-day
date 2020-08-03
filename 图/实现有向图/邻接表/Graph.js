/**
 * 有向图
 */
class Graph {
  constructor () {
      this.adjacencyList = new Map();
  }

  addNode (node) {
      if (!this.adjacencyList.has(node)) {
          this.adjacencyList.set(node, []);
      } else {
          throw new Error('节点已存在')
      }
  }

  addEdge (to, from) {
      if (
          this.adjacencyList.has(to) &&
          this.adjacencyList.has(from)
      ) {
          let toAdjacent = this.adjacencyList.get(to)
          toAdjacent = [...new Set([...toAdjacent, from])];
          // 有向图，只连接to -> from
          this.adjacencyList.set(to, toAdjacent);
      }   
  }

  print () {
      const nodes = this.adjacencyList.keys();
      for (let node of nodes) {
          const neighbors = this.adjacencyList.get(node);
          const neighborsString = neighbors.join(' ');
          console.log(`节点${node}, 相邻节点${neighborsString}`);
      }
  }
}
