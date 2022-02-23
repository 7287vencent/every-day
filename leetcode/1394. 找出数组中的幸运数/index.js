/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = {};
  for (let v of arr) {
    if (!map[v]) {
      map[v] = 0;
    }
    map[v]++;
  }
  // ? 判断
  let res = -1;
  for (let key in map) {
    if (map[key] == key) {
      res = Math.max(res, key);
    }
  }
  return res;
};
