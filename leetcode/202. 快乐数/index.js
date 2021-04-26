/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getNext = n => {
    let sum = 0;
    while (n > 0) {
      let d = n % 10;
      n = (n / 10) >> 0;
      sum += d * d;
    }
    return sum;
  };
  let hash = new Set();
  while (n !== 1 && !hash.has(n)) {
    hash.add(n);
    n = getNext(n);
  }
  return n === 1;
};
