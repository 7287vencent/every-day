// 创建加权图
const graph = new Graph();
// 添加节点
graph.addNode('start')
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('finish')
// 添加边以及权重
graph.addEdge('start', 'A', 5)
graph.addEdge('start', 'B', 2)
graph.addEdge('A', 'B', 8)
graph.addEdge('A', 'C', 4)
graph.addEdge('A', 'D', 2)
graph.addEdge('B', 'D', 7)
graph.addEdge('C', 'D', 6)
graph.addEdge('C', 'finish', 3)
graph.addEdge('D', 'finish', 1)


/**
 * Dijkstra 算法
 * @param graph 图
 * @param startNode 开始的节点
 * @param endNode 结束的节点
 */
const Dijkstra = (graph, startNode, endNode) => {
  if (
    graph.adjacencyList.has(startNode) &&
    graph.adjacencyList.has(endNode) &&
    endNode !== startNode
  ) {
    const queue = new Queue();
    const path = [];
    const timeHash = {};
    const backHash = {};

    const nodes = graph.adjacencyList.keys();
    for (let node of nodes) {
      // 默认距离为无限大
      timeHash[node] = Number.POSITIVE_INFINITY
    }
    // 起始点的距离是0
    timeHash[startNode] = 0;
    queue.enqueue([startNode, 0]);
    while (!queue.isEmpty()) {
      const [currentNode] = queue.dequeue();
      const list = graph.adjacencyList.get(currentNode);
      for (let i = 0; i < list.length; i++) {
        const [nextNode, nextNodeWeight] = list[i];
        let time = timeHash[currentNode] + nextNodeWeight;
        // 总是取最短的路径
        if (time < timeHash[nextNode]) {
          timeHash[nextNode] = time;
          backHash[nextNode] = currentNode;
          queue.enqueue([nextNode, time]);
        }
      }
    }
    let lastNode = endNode
    // 使用回溯对象，查询最短路径
    while (startNode !== lastNode) {
      path.unshift(lastNode)
      lastNode = backHash[lastNode];
    }
    path.unshift(startNode);
    return `最短路径: ${path.join(' --> ')}, 所花费的时间: ${timeHash[endNode]}`
  }
  return -1
}

// 最短路径: start --> A --> D --> finish, 所花费的时间: 8
Dijkstra(graph, 'start', 'finish')
