// import Graph from './Graph'
const { Graph } = require('./Graph.js')

const graph = new Graph()
// 添加节点
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
// 添加边
graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'E')
graph.addEdge('B', 'A')
graph.addEdge('B', 'C')
graph.addEdge('C', 'B')
graph.addEdge('C', 'E')
graph.addEdge('C', 'F')
graph.addEdge('D', 'A')
graph.addEdge('D', 'E')
graph.addEdge('E', 'A')
graph.addEdge('E', 'C')
graph.addEdge('E', 'D')
graph.addEdge('E', 'F')
graph.addEdge('F', 'C')
graph.addEdge('F', 'E')
// 打印
graph.print()

// 节点A, 相邻节点B D E
// 节点B, 相邻节点A C
// 节点C, 相邻节点B E F
// 节点D, 相邻节点A E
// 节点E, 相邻节点A C D F
// 节点F, 相邻节点C E
