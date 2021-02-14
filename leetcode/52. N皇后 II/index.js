/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let res = 0;
  const find = (row, temp = []) => {
    if (row === n) {
      res++;
      return;
    }
    for (let col = 0; col < n; col++) {
      const pos = temp.some((ci, ri) => {
        return ci === col || ri + ci === col + row || ri - ci === row - col;
      });
      if (pos) {
        continue;
      }
      find(row + 1, [...temp, col]);
    }
  };
  find(0);
  return res;
};
