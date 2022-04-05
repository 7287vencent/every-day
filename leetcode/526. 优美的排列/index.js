/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let vis = Array(n + 1).fill(0);
  let match = Array(n + 1)
    .fill(0)
    .map(() => new Array());
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j % i === 0 || i % j === 0) {
        match[i].push(j);
      }
    }
  }
  let num = 0;
  const dfs = index => {
    if (index === n + 1) {
      num++;
      return;
    }
    for (let x of match[index]) {
      if (!vis[x]) {
        vis[x] = true;
        dfs(index + 1);
        vis[x] = false;
      }
    }
  };
  dfs(1);
  return num;
};
