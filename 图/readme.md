## 什么是图

图是由有限的**节点**和连接它们的**边**组成。



![图.png](./picture/ip17nXNIE65hlxK.png)



### 无向图

连接节点的边，是双向的。节点1可以遍历到节点2，节点2也可以遍历到节点1。

### 有向图

连接节点的边，是单向的。只能从节点1到节点2，节点2无法到节点1。

### 如何表示图？

#### 邻接表



![AdjacencyList.png](https://i.loli.net/2020/07/26/TXuO2MnYe5go71P.png)



使用数组存储每一个节点，数组的长度就是节点的数量。而数组的每一位则存储着，第`i`个节点相邻的节点列表。

#### 领接矩阵



![AdjacencyMatrix.png](./picture/p4gL9yVREmXQozJ.png)



使用一个大小等于L * L的二维数组表示，L是节点的数量。Matrix[i][j], 表示节点 i 到 j有一条边。

## 实现无向图（undirected graph）

### 邻接表的实现

```js
/**
 * 无向图
 */
class Graph {
    constructor () {
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
复制代码
```

#### 创建图的示例



![无向图.png](./picture/bmFHjOxQ9YSdAt1.png)



```js
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
复制代码
```

#### 图的广度优先遍历（BFS）

```js
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

复制代码
```

#### 图的深度优先遍历（DFS）

```js
/**
 * 无向图
 */
class Graph {
    
   // ...

    /**
     * 图的深度优先遍历
     * node 遍历的起点
     */
    dfs (node) {
        const result = [];
        const hash = {};
        const nodes = this.adjacencyList.keys();
        for (let node of nodes) {
            hash[node] = false;
        }
        const DFS = (node) => {
            let list = this.adjacencyList.get(node);
            for (let i = 0; i < list.length; i++) {
                let temp = list[i];
                if (!hash[temp]) {
                    hash[temp] = true;
                    result.push(temp);
                    DFS(temp);
                }
            }
        }
        if (this.adjacencyList.has(node)) {
            hash[node] = true;
            result.push(node);
            DFS(node);
            return result;
        }
        return null;
    }
}
复制代码
```

### 领接矩阵的实现

```js
/**
 * 无向图
 */
class Graph {
    constructor () {
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
复制代码
```

#### 图的广度优先遍历（BFS）

```js
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
            while(queue.length > 0) {
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
复制代码
```

#### 图的深度优先遍历（DFS）

```js
/**
 * 无向图
 */
class Graph {
    // ...    
    dfs (node) {
        if (node >= 0 && node < this.matrix.length) {
            const result = [];
            const hash = {};
            for (let i = 0; i < this.matrix.length; i++) {
                hash[i] = false;
            }
            hash[node] = true;
            result.push(node);
            const DFS = (node) => {
                let list = this.matrix[node];
                for (let i = 0; i < list.length; i++) {
                    if (
                        list[i] === 1 &&
                        !hash[i]
                    ) {
                        result.push(i);
                        hash[i] = true;
                        DFS(i);
                    }
                }
            };
            DFS(node);
            return result;
        }
        return -1;
    }
}
复制代码
```

## 实现有向图（oriented graph）

### 领接表实现有向图

```js
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
复制代码
```

### 领接矩阵实现有向图

```js
/**
 * 有向图
 */
class Graph {
    constructor () {
        this.matrix = [];
    }

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

    addEdge (to, from) {
        if (
            (to < this.matrix.length && to >= 0) && 
            (from < this.matrix.length && from >= 0)
        ) {
            this.matrix[to][from] = 1;
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
复制代码
```

## 实现加权图（weighted-graph）

> 边具有权重的图



![weighted-graph.png](./picture/5J647WHZTwI2fcs.png)



### 领接表实现加权图



![weighted-graph-undirected-graph.png](./picture/vpHeStrFEgl2Q5d.png)



使用数组存储每一个节点，数组的长度就是节点的数量。而数组的每一位则存储着，第`i`个节点相邻的节点列表, 以及每一个相领节点到当前节点的权重。

```js
class Graph {
    constructor () {
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
复制代码
```

### 领接矩阵实现加权图



![weighted-graph-undirected-graph.png](./picture/1tHWczRwk2xCZFr.png)



使用一个大小等于L  *L的二维数组表示，L是节点的数量。Matrix[i][j], 表示节点 i 到 j边的权重值（0 ～ ∞），'*'表示没有边。

```js
class Graph {
    constructor () {
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
复制代码
```

## 最短路径问题

> 对于非加权图的最短路径问题，使用BFS（广度优先遍历）即可。

```js
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
复制代码
```

## 加权图的最短路径问题

### Dijkstra

迪克斯特拉算法，是一种用于在图中查找节点之间最短路径的算法。由荷兰科学家，埃格斯·迪克斯特拉（1930年5月11日~2002年8月6日）在1956年提出。



![Dijkstra.png](./picture/lBIqj3xOpztF9s1.png)



首先先构建加权图

```js
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
复制代码
```

## 参考

- [A Walkthrough of Dijkstra’s Algorithm (in JavaScript!)](https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026)
- [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra's_algorithm)
- [What is a graph](https://www.educative.io/edpresso/what-is-a-graph-data-structure)
- [Implementation of Graph in JavaScript](https://www.geeksforgeeks.org/implementation-graph-javascript/)

作者：GoWest25701
链接：https://juejin.im/post/6856232259905978376
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。