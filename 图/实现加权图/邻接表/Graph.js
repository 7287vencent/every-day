
class Graph {
    constructor() {
        // key ～ 节点
        // [value, weight] ～ 相邻节点的列表, 以及权重
        this.adjacencyList = new Map();
    }

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
     * weight 权重
     */
    addEdge (to, from, weight) {
        if (
            this.adjacencyList.has(to) &&
            this.adjacencyList.has(from) &&
            typeof weight === 'number'
        ) {
            let toAdjacent = this.adjacencyList.get(to);
            let fromAdjacent = this.adjacencyList.get(from);
            toAdjacent = [...toAdjacent, [from, weight]];
            fromAdjacent = [...fromAdjacent, [to, weight]];
            this.adjacencyList.set(to, toAdjacent);
            this.adjacencyList.set(from, fromAdjacent);
        }
    }
}
