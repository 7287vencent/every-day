/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  const find = (row, temp = []) => {
    // ? 结束条件
    if (row === n) {
      res.push(
        temp.map(c => {
          let arr = Array(n).fill(".");
          arr[c] = "Q";
          return arr.join("");
        })
      );
    }
    for (let col = 0; col < n; col++) {
      // ? ci,ri 代表 `已经` 填入的皇后位置
      // ? col, row 代表 `尝试` 填入的皇后位置
      let pos = temp.some((ci, ri) => {
        return ci === col || ri - ci === row - col || ri + ci === row + col;
      });
      if (pos) {
        // ? 不允许填
        continue;
      }
      // ? 允许填，直接找下一行
      find(row + 1, [...temp, col]);
    }
  };
  find(0);
  return res;
};
