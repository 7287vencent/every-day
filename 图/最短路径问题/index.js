
/**
 * 无向图中，查找某一个顶点，到其他顶点的最短路径
 * graph 图
 * node 起始的顶点
 * 无权重的图，边的距离默认为1
 */
const shortestPath = (graph, node) => {
  // 使用bfs
  if (
    graph &&
    graph.adjacencyList &&
    graph.adjacencyList.has(node)
  ) {
    const hash = {};
    const queue = [];
    const nodes = graph.adjacencyList.keys();
    for (let node of nodes) {
      hash[node] = false;
    }
    hash[node] = 0;
    queue.push(node);
    while (queue.length > 0) {
      let q = queue.shift();
      let list = graph.adjacencyList.get(q);
      for (let i = 0; i < list.length; i++) {
        let temp = list[i]
        if (hash[temp] !== false && hash[temp] > hash[q] + 1) {
          hash[temp] = hash[q] + 1;
        }
        if (hash[temp] === false) {
          hash[temp] = hash[q] + 1;
          queue.push(temp)
        }
      }
    }
    return hash;
  }
  return -1;
}
