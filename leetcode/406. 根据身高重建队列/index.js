/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // ? 1. 先排序
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  let n = people.length;
  let res = Array(n).fill(-1);
  for (let person of people) {
    let space = person[1] + 1;
    for (let i = 0; i < n; i++) {
      if (res[i] === -1) {
        --space;
        if (space === 0) {
          res[i] = person;
          break;
        }
      }
    }
  }
  return res;
};
