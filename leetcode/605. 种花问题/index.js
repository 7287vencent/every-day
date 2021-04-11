/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let prev = -1;
  let m = flowerbed.length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    if (flowerbed[i] === 1) {
      if (prev < 0) {
        count += (i / 2) >> 0;
      } else {
        count += ((i - prev - 2) / 2) >> 0;
      }
      if (count >= n) {
        return true;
      }
      prev = i;
    }
  }
  if (prev < 0) {
    count += ((m + 1) / 2) >> 0;
  } else {
    count += ((m - prev - 1) / 2) >> 0;
  }
  return count >= n;
};
