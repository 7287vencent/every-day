
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
