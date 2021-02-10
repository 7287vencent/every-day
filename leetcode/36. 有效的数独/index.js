/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = Array(9)
    .fill(0)
    .map(() => new Object());
  let col = Array(9)
    .fill(0)
    .map(() => new Object());
  let box = Array(9)
    .fill(0)
    .map(() => new Object());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      let num = board[i][j];
      let bIndex = (((i / 3) >> 0) * 3 + j / 3) >> 0;
      if (row[i][num] || col[j][num] || box[bIndex][num]) {
        return false;
      }
      row[i][num] = true;
      col[j][num] = true;
      box[bIndex][num] = true;
    }
  }
  return true;
};

let arr = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(arr));
