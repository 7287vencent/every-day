/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function (n, presses) {
  n = Math.min(n, 3);
  if (presses == 0) return 1;
  if (presses == 1) return n == 1 ? 2 : n == 2 ? 3 : 4;
  if (presses == 2) return n == 1 ? 2 : n == 2 ? 4 : 7;
  return n == 1 ? 2 : n == 2 ? 4 : 8;
};
