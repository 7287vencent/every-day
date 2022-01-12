/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let tail = m + n - 1;
  let cur = 0;
  let pa = m - 1;
  let pb = n - 1;
  while (pa >= 0 || pb >= 0) {
    if (pa === -1) {
      cur = B[pb--];
    } else if (pb === -1) {
      cur = A[pa--];
    } else if (A[pa] > B[pb]) {
      cur = A[pa--];
    } else {
      cur = B[pb--];
    }
    A[tail--] = cur;
  }
};
