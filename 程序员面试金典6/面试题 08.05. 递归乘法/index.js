/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
  // todo 分治
  if (B === 0) return 0;
  if (B === 1) return A;
  return (multiply(A, B >> 1) << 1) + ((B & 1) === 0 ? 0 : A);
};

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// todo 加法
var multiply = function (A, B) {
  let sum = 0;
  for (let i = 0; i < B; i++) {
    sum += A;
  }
  return sum;
};
