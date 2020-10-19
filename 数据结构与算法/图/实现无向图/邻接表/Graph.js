/**
 * 无向图
 */
class Graph {
  constructor() {
    // key ～ 节点
    // value ～ 相邻节点的列表
    this.adjacencyList = new Map();
  }

  /**
   * 添加节点
   */
  addNode (node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    } else {
      throw new Error('节点已存在')
    }
  }

  /**
   * 添加边
   * to 节点1
   * form 节点2
   */
  addEdge (to, from) {
    if (
      this.adjacencyList.has(to) &&
      this.adjacencyList.has(from)
    ) {
      // 做一个去重
      let toAdjacent = this.adjacencyList.get(to)
      let fromAdjacent = this.adjacencyList.get(from)
      toAdjacent = [...new Set([...toAdjacent, from])];
      fromAdjacent = [... new Set([...fromAdjacent, to])];
      // 无向图，所以边是连接两边的
      this.adjacencyList.set(to, toAdjacent);
      this.adjacencyList.set(from, fromAdjacent);
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

module.exports = {
  Graph
}