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
