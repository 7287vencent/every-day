/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 回溯 + 递归
  // 1. 判断边界
  if (word.length === 0) return true;
  if (board.length === 0) return false;
  // 2. 开始搜索
  const row = board.length;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 开始搜索
      const ret = find(i, j, 0);
      if (ret) return true;
    }
  }
  return false;
  // 3. 递归函数内部
  // 标记当前位置用过了
  // 开始下一步搜索
  // 撤销标记
  function find(i, j, cur) {
    // 边界判断
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;
    const letter = board[i][j];
    if (letter !== word[cur]) return false;
    // 遍历到了最后一个，相等
    if (cur === word.length - 1) return true;
    board[i][j] = null;
    // 找下一个单词 每个字母都有 上下左右四个方向
    const ret =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1);
    board[i][j] = letter;
    return ret;
  }
};
