/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  let n = A.length;
  // ? 将 a 中的 n 个移动到 c
  const move = (n, A, B, C) => {
    if (n === 1) {
      C.push(A.pop());
    } else {
      // ? 将 a 中的 n - 1 个移动到 b
      move(n - 1, A, C, B);
      C.push(A.pop());
      // ? 将 b 中的 n - 1 个移动到 c
      move(n - 1, B, A, C);
    }
  };
  move(n, A, B, C);
};
