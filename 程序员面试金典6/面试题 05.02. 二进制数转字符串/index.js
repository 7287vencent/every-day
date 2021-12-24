/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  if (num <= 0 || num >= 1) return "ERROR";
  let res = "0.";
  let dig;
  let cat = 2;
  while (num > 0) {
    num *= 2;
    // 区个位
    dig = num >= 1 ? 1 : 0;
    res += dig;
    num -= dig;
    cat++;
    if (num === 0) return res;
    if (cat > 32) return "ERROR";
  }
  return "ERROR";
};
